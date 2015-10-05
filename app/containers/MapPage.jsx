import React from "react";
import Layout from "containers/Layout";
import $ from "jquery";
import styles from "./MapPage.less";

(function (app) {
    app.loadMap = function () {
        // alert("callback");
        var map;
        var directionsDisplay;
        var directionsService;
        var stepDisplay;
        var markerArray = [];
        /*location*/
        /*  var stockholm = new google.maps.LatLng(-36.8121758,174.7265294);*/
        var parliament = new google.maps.LatLng(-36.8121758, 174.7265294);
        var marker;

        function initialize() {
            // Instantiate a directions service.
            directionsService = new google.maps.DirectionsService();

            // Create a map and center it on Manhattan.
            var manhattan = new google.maps.LatLng(-36.8121758, 174.7265294);
            var mapOptions = {
                zoom: 13,
                center: manhattan
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            // Create a renderer for directions and bind it to the map.
            var rendererOptions = {
                map: map
            };
            directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)

            // Instantiate an info window to hold step text.
            stepDisplay = new google.maps.InfoWindow();


            /*location*/

            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: parliament
            });
            google.maps.event.addListener(marker, 'click', toggleBounce);
        }

        function showSteps(directionResult) {
            // For each step, place a marker, and add the text to the marker's
            // info window. Also attach the marker to an array so we
            // can keep track of it and remove it when calculating new
            // routes.
            var myRoute = directionResult.routes[0].legs[0];

            for (var i = 0; i < myRoute.steps.length; i++) {
                var marker = new google.maps.Marker({
                    position: myRoute.steps[i].start_location,
                    map: map
                });
                attachInstructionText(marker, myRoute.steps[i].instructions);
                markerArray[i] = marker;
            }
        }

        function toggleBounce() {

            if (marker.getAnimation() != null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        function attachInstructionText(marker, text) {
            google.maps.event.addListener(marker, 'click', function () {
                // Open an info window when the marker is clicked on,
                // containing the text of the step.
                stepDisplay.setContent(text);
                stepDisplay.open(map, marker);
            });
        }

        this.calcRoute = function () {
            console.log("calc");
            // First, remove any existing markers from the map.
            for (var i = 0; i < markerArray.length; i++) {
                markerArray[i].setMap(null);
            }

            // Now, clear the array itself.
            markerArray = [];

            // Retrieve the start and end locations and create
            // a DirectionsRequest using WALKING directions.
            var start = "3-5 Birkenhead ave, Birkenhead, Auckland";
            var end = document.getElementById('end').value;
            var selectedMode = document.getElementById('mode').value;
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode[selectedMode]
            };

            // Route the directions and pass the response to a
            // function to create markers for each step.
            /*			directionsService.route(request, function(response, status) {
             if (status == google.maps.DirectionsStatus.OK) {
             var warnings = document.getElementById('warnings_panel');
             warnings.innerHTML = '<b>' + response.routes[0].warnings + '</b>';
             directionsDisplay.setDirections(response);
             showSteps(response);
             }
             });*/


            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });

        }


        initialize();
        $("#submit").bind("click", this.calcRoute);

    };

    app.loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
            'callback=app.loadMap';
        document.body.appendChild(script);
    };
}(window.app = window.app || {}));

//window.onload=
export default class MapPage extends React.Component {

    constructor() {
        super();
        app.loadScript();

    }

    componentDidMount() {

    }

    sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime)
                return;
        }
    }

    render() {
        return <Layout>

            <div style={{ height: "90%",margin: "0px",padding:"0px"}} id="map-canvas"></div>
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
                    <input type="submit" value="get road" id="submit"/>
                </div>
            </div>

        </Layout>;
    }
}
