import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

import { AmchartsReact } from 'amchart4-react'

am4core.useTheme(am4themes_animated);

class LineChart extends Component {

    state = {
        chart: null,
        dateAxis: null
    }

    componentDidMount() {
        const chart = am4core.create("chartdiv", am4maps.MapChart);

        this.createChart(chart);

        this.setState(() => ({ chart }))
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    createChart = (chart) => {
        let primary = this.props.theme.palette.primary.main
        let secondary = this.props.theme.palette.secondary.main
        // Create map instance

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();
        //chart.projection = new am4maps.projections.Orthographic();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        //Add some custom data
        polygonSeries.data = [{
            "id": "FR",
            "color": am4core.color(primary),
            "description": "Lucas' home country. We spend summer of 2018..."
        },
        {
            "id": "AE",
            "color": am4core.color(primary),
            "description": "Karina's birth place "
        },
        {
            "id": "LB",
            "color": am4core.color(primary),
            "description": "Karina's culture "
        },
        {
            "id": "DE",
            "color": am4core.color(primary),
            "description": "Our current home"
        }]

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        //polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#5CAB7D");
        polygonTemplate.propertyFields.fill = "color";


        polygonTemplate.events.on("hit", (ev) => {

            ev.target.series.chart.zoomToMapObject(ev.target, 3, true, 1000);


            let country = ev.target.dataItem.dataContext.name


            this.setState({ country })
            // get object info
            let details = ev.target.dataItem.dataContext.description;
            console.log(ev.target.dataItem.dataContext)

            if (details) {
                this.setState({ details })
            }
            else {
                this.setState({ details: null, chart })
            }
        }, this);


        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color(secondary);
        console.log(hs)

        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];

        // Add zoom control
        chart.zoomControl = new am4maps.ZoomControl();
        chart.zoomControl.dy = -100;
        chart.zoomControl.slider.height = 200;
        chart.zoomControl.slider.align = "top"
        this.setState({ loading: false })
        console.log(chart)

    }


    render() {
        return (
            <div>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
                {this.state.chart ?
                    <AmchartsReact
                        chart={this.state.chart}

                        color={am4core.color("#838383")}
                    />
                    : null}
            </div>
        );
    }
}

export default withTheme()(LineChart)