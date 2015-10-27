import React from "react";
import { Link } from "react-router";
import  "./layout.less";

import { connect } from 'react-redux';

class Layout extends React.Component {
  
  getAllElementsWithAttribute(attribute,val){

    return Array.from(document.getElementsByTagName('*'))
                .filter(e=>e.getAttribute(attribute) ==val);

  }

  componentDidMount(){

    this.getAllElementsWithAttribute("data-reactid","")
        .filter(e=>e)
        .map(e=>e.style.height = "100%");

    this.getAllElementsWithAttribute("data-reactid",".0.1.1")
        .map(e=>e.style.height = "100%")
        .filter(e=>e);

  }

  
  render() {
    let {menus,contact,introduction,logoimg,name,opentime,src,type}=this.props.data;
    return(
      
      <div className="layout">
      <div id="header">
      <h1  id="logo"><span>{name}</span></h1>

      </div>

      <div className="tab-pane fade in active" id="home">
      <div id="comprehensiveness">
      <div id="logo-img">
      </div>
      <p id="name">
      {introduction}
      </p>

      <p id="contact">
      {contact}<br/>

      </p>

      <div id="opentime">
      <p>
      {type}
      </p>
      <table id="todaytime">
      <tbody>
      <tr className="information-text-li" id="information-text-li-0">
      <td className="week">{opentime}</td>
      <td id="today-time"></td>
      </tr>
      </tbody>
      </table>
      </div>

      </div>
      <iframe width="100%" height="500px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
      src={src}
      ></iframe>
      <br/>
      <small></small>
      </div>
      <div id="navigation-bar">
      <ul id="myTab" className="nav nav-tabs">
      {menus.map(({link,display},index) =>
        (<li key={index}><Link to={link}>{display}</Link></li>))}
      </ul>
      <div className='clear'></div>
      </div>
      <div>
      {this.props.children}
      </div>
      </div>)
  }
}

function mapStateToProps(state) {
  //返回的是component的 property,需要返回一个object()
  return  {data: state.info.layout}
}

export default connect(mapStateToProps)(Layout);
