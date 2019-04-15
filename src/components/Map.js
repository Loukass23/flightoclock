import React, { Component } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl';
import AmChart from './AmChart'
const token = "pk.eyJ1IjoibG91a2FzczIzIiwiYSI6ImNqdWUya3JqYTBvNmM0NHJ5bWNxMXdrOXkifQ.N4FxYFa2fs1H6SYjgVKz-w"

const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

class Map extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.8,
            longitude: 96,
            zoom: 3,
            bearing: 0,
            pitch: 0
        }
    };

    _onViewportChange = viewport => this.setState({ viewport });

    render() {
        const { viewport } = this.state;

        return (
            <>
                <AmChart />
                {/* <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={token}>

            </MapGL> */}
            </>
        );
    }

}


export default Map