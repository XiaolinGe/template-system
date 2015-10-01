import React from "react";
import Layout from "containers/Layout";
import $ from "jquery";
import styles from "./MapPage.less";

(function (app) {
    app.loadMap = function () {
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(-36.8121758, 174.7265294)
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    };

    app.loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
            'callback=app.loadMap';
        document.body.appendChild(script);
    };

}(window.app = window.app || {}));

window.onload = app.loadScript;


export default class MapPage extends React.Component {


    render() {
        return <Layout>
            <div id="address">
                <div style={{ height: "100%",margin: "0px",padding:"0px"}} id="map-canvas"></div>
                <div id="frmholder">
                    <div id="map-form">
                        <span className={styles.addressLable}>From:</span>
                        <input type="search" size="25" id="end" placeholder="Enter your address here"/>
                        <span className={styles.addressLable}>To Dutch Delight:</span>
                        <span id="toaddress">3-5 Birkenhead ave, Birkenhead, Auckland</span>

        <span id="panel2">
            <select id="mode">
                <option value="DRIVING">Driving</option>
                <option value="WALKING">Walking</option>
                <option value="BICYCLING">Bicycling</option>
                <option value="TRANSIT">Transit</option>
            </select>
        </span>
                        <input type="submit" value="get road" id="submit" onClick="calcRoute();"/>
                    </div>
                </div>
            </div>
        </Layout>;
    }
}
