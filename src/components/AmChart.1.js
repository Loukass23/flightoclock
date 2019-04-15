import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);
class AmChart extends Component {
    componentDidMount() {
        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#74B266");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");

        chart.on('click', 'states-layer', function (e) {
            console.log(e)
            // new mapboxgl.Popup()
            //     .setLngLat(e.lngLat)
            //     .setHTML(e.features[0].properties.name)
            //     .addTo(map);
        });

        // Remove Antarctica
        polygonSeries.include = ["PT", "ES", "FR", "DE", "BE", "NL", "IT", "AT", "GB", "IE", "CH", "LU", "RU"];
    }

    componentWillUnmount() {
        if (this.map) {
            this.map.dispose();
        }
    }
    handleChange = (e) => {
        console.log(e)
        // this.setState({
        //     [e.target.id]: e.target.value
        // })
    }

    render() {
        return (
            <div onClick={this.handleChange} id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        );
    }
}

export default AmChart;