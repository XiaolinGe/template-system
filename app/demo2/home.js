import React from 'react';
import Layout from "./Layout";
import $ from 'jquery';
import  "./home.less";
import { connect } from 'react-redux';


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

class Home extends React.Component {


  show_map(){
    let props = this.props;
    let home = props.home;
    if(home != undefined) {
      let googleMap = home[0];
      if(googleMap != undefined) {
        let inforid = googleMap.inforid;
        if(inforid != undefined){
          initMap();
        }
      }
    }
  }
  componentDidMount() {
    this.show_map();
  //  props.home[0].inforid

  }


  render() {
   // this.show_map();
    let {home} =  this.props;
    console.log(home);
    
    return (
    <div className='home'> 
    <div id="homeinformations">
    {home.map(({id, inforid, title, content}, index) =>
      ( <div className="homeinformation" id={id} key={index}>
        <h4 className="hometitle">{title}</h4>
        <div id={inforid}>{content}</div>
        </div>)
    )}
    </div>
    </div> );
  }
};

function mapStateToProps(state) {
  //返回的是component的 property,需要返回一个object()
  return  {home: state.info.home}
}

export default connect(mapStateToProps)(Home);





