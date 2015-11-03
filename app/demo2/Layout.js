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
    console.log(this.props);   
    let {base_info:base_info,menus:menus}=this.props;
    console.log(menus);
    let {summary,address,phone_en,phone_cn,email,logo,name,google_src,type,opentime}=base_info;
 
   
    return(
      
      <div className="layout">
      <div id="header">
      <h1  id="logo"><span>{name}</span></h1>

      </div>

      <div className="tab-pane fade in active" id="home">
      <div id="comprehensiveness">
      <img src={logo} id="logo-img" />
      <p id="name">
      {summary}
      </p>

      <p id="contact">
      Address: {address}<br/>
      Phone (English): {phone_en}<br/>
      Phone (中文): {phone_cn}<br/>
      Email: {email}<br/>
     

      </p>

      <div id="opentime">
      <p>
      {type}
      </p>
      <table id="todaytime">
      <tbody>
      <tr className="information-text-li" id="information-text-li-0">
      <td className="week"></td>
      <td id="today-time"></td>
      </tr>
      </tbody>
      </table>
      </div>

      </div>
      <iframe width="100%" height="500px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
      src={google_src}
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
  let [[base_info],gallery,menus,workinghours] = state.info;
  //返回的是component的 property,需要返回一个object()
  return {base_info:base_info,menus:menus,workinghours:workinghours}
}

export default connect(mapStateToProps)(Layout);
