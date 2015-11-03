import React from "react";
import Layout from "./Layout";
import $ from "jquery";
import styles from "./map.less";
import { connect} from 'react-redux';




var map;
var directionsDisplay;
var directionsService;
var stepDisplay;
var markerArray = [];

/*location*/
/*  var stockholm = new google.maps.LatLng(-36.8121758,174.7265294);*/
var marker;

var  address;

$.ajax({
  type: "GET",
  url: '/website/map',
  async: false,
  success : function(data) {
    address = data.address;
  }
});

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function initialize() {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var loc = results[0].geometry.location;
      directionsService = new google.maps.DirectionsService();
      var mapOptions = {
        zoom: 13,
        center: loc
      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      directionsDisplay = new google.maps.DirectionsRenderer({map: map})
      stepDisplay = new google.maps.InfoWindow();
      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: loc
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
    google.maps.event.addListener(marker, 'click', toggleBounce);
  });
}

function calcRoute() {


  for (var i = 0; i < markerArray.length; i++) {
    markerArray[i].setMap(null);
  }

  markerArray = [];

  var end = document.getElementById('end').value;
  var selectedMode = document.getElementById('mode').value;
  var request = {
    origin: address,
    destination: end,
    travelMode: google.maps.TravelMode[selectedMode]
  };

  directionsService.route(request, function (response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

}

function showSteps(directionResult) {
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

function attachInstructionText(marker, text) {
  google.maps.event.addListener(marker, 'click', function () {
    stepDisplay.setContent(text);
    stepDisplay.open(map, marker);
  });
}


class Map extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
      initialize();
  }

  render() {
    let {name,address} = this.props;
    return  <div  id="address">
    <div id="map-canvas"/>
    <div id="frmholder">
    <div id="map-form">
    <span className="address-lable">From:</span>
    <input type="search" size="25" id="end" placeholder="Enter your address here"/>
    <span className="address-lable">To {name}:</span>
    <span id="toaddress">{address}</span>

    <span id="panel2">

    <select id="mode">
    <option value="DRIVING">Driving</option>
    <option value="WALKING">Walking</option>
    <option value="BICYCLING">Bicycling</option>
    <option value="TRANSIT">Transit</option>
    </select>
    </span>
    <input type="submit" value="get road" id="submit" onClick={calcRoute}/>
    </div>
    </div>

    </div>;
  }
}



function mapStateToProps(state) {
  let [[base_info]] =  state.info;//[[],[],[]]
  //返回的是component的 property,需要返回一个object()
  return base_info;
}

export default connect(mapStateToProps)(Map);
