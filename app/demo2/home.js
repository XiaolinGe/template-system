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


class Map extends React.Component {

  show_map() {
    let base_info = this.props; 
    let title_map = base_info.title_map;
         if(title_map != undefined) {
          initMap();
        }
  }
  componentDidMount() {
    this.show_map();
  }
  
  render() {
    let {title_map} = this.props;
  return (    
    <div className="homeinformation" id="homeinformation-1">
    <h4 className="hometitle">{title_map}</h4>
    <div id="home-map-canvas"></div>
    </div>
  );
    }
}


class About extends React.Component {
  render(){
  let {title_about,phone_about_content} = this.props;
  return (    
    <div className="homeinformation" id="homeinformation-2">
    <h4 className="hometitle">{title_about}</h4>
    <div id="about">{phone_about_content}</div>
    </div>
  );
    }
}


class Contact extends React.Component {
  render(){
    let {title_contact,address,phone_en,phone_cn,email} = this.props;
    console.log(title_contact);
    console.log(address);
    
  return (    
    <div className="homeinformation" id="homeinformation-3">
    <h4 className="hometitle">{title_contact}</h4>
    <div id="contact">
    <p> {address} </p>
    <p> {phone_en}</p>
    <p> {phone_cn}</p>
    <p> {email}</p>    
    </div>
    </div>
  );
    }
}



class Home extends React.Component {

/*
  show_map() {
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
  */

  show_map() {
    let base_info = this.props;
    let title_map = base_info.title_map;
    if(title_map != undefined) {
      initMap();
    }
  }
  componentDidMount() {
    this.show_map();
  }

  render() {
   // this.show_map();
   // let base_info =  this.props;
    let {title_map,title_contact,address,phone_en,phone_cn,email,title_about,phone_about_content}=this.props;
   
    return (
    <div className='home'> 
    <div id="homeinformations">

      <Map title_map={title_map}/>
      <About title_about={title_about} phone_about_content={phone_about_content}/>
      <Contact title_contact={title_contact} address={address} phone_en={phone_en} phone_cn={phone_cn} email={email}/>

    </div>
    </div> );
  }
};

function mapStateToProps(state) {
  let [[base_info],gallery,menus,workinghours] = state.info; //[[],[],[]]
  console.log(base_info);
  //返回的是component的 property,需要返回一个object()
  return  base_info;
}

export default connect(mapStateToProps)(Home);




