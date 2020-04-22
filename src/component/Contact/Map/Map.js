import React, { Component } from "react";
import styles from "./Map.module.scss";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
    <div className={styles.marker}>
        {text}
        {<i class="fas fa-map-marker"></i>}
    </div>
);

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 52.23,
            lng: 21.0,
        },
        zoom: 16,
    };

    render() {
        return (
            <div className={styles.map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC2pMKCpUVxiN8ndq4RAEiyyYc1O5BsZ9w" }}
                    defaultCenter={[52.233122, 20.99965]}
                    defaultZoom={16}
                >
                    <AnyReactComponent lat={52.233122} lng={20.99965} text="Theatre." />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
