import React from "react";
import styles from "./Map.module.scss";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
    <div className={styles.marker}>
        {text}
        {<i class="fas fa-map-marker"></i>}
    </div>
);

const Map = () => {
    return (
        <div className={styles.map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC2pMKCpUVxiN8ndq4RAEiyyYc1O5BsZ9w" }}
                defaultCenter={[52.233122, 20.99965]}
                defaultZoom={16}
            >
                <Marker lat={52.233122} lng={20.99965} text="Theatre." />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
