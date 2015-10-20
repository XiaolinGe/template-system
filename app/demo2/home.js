import React from 'react';
import Layout from "./Layout";
import $ from 'jquery';
import  "./home.less";


$.ajax({
  type: "GET",
  url: "json/home.json",
  async: false,
  success : function(data) {
    console.log(data);
  }
});


var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('home-map-canvas'), {
    zoom: 13,
    center: {lat: -36.8121758, lng: 174.7265294} 
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: -36.8121758, lng: 174.7265294}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

export default class Home extends React.Component {

  
  constructor(props) {
    super(props);
    $.ajax({
      type: "GET",
      // url: this.props.url,
      url:"json/home.json",
      async: false,
      success : function(data) {
        this.state = {data: data};
      }.bind(this)
    });
  }

  componentDidMount(){
    initMap();

  }


  render() {
    return <Layout url="/json/layout.json">
    <div className='home'> 
    <div id="homeinformations">
 {this.state.data.map(({id, inforid, title, content}, index) =>
   ( <div className="homeinformation" id={id} key={index}>
     <h4 className="hometitle">{title}</h4>
        <div id={inforid}>{content}</div>
        </div>)
    )}
    </div>
    </div>
    </Layout>;
  }
}





