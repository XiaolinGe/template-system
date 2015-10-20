import React from "react";
import { Link } from "react-router";
import  "./layout.less";


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
          $.ajax({
            type: "GET",
            url: "json/layout.json",
            async: false,
              success : function(data) {
                this.state = {data: data};
            }.bind(this)
        });
    }

    
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
    

    return(

      <div className="layout">
      <div id="header">
      <h1  id="logo"><span>{this.state.data.name}</span></h1>

      </div>

      <div className="tab-pane fade in active" id="home">
      <div id="comprehensiveness">
      <div id="logo-img">
      </div>
      <p id="name">
      {this.state.data.introduction}
      </p>

      <p id="contact">
      {this.state.data.contact}<br/>

      </p>

      <div id="opentime">
      <p>
      {this.state.data.type}
      </p>
      <table id="todaytime">
      <tbody>
      <tr className="information-text-li" id="information-text-li-0">
      <td className="week">{this.state.data.opentime}</td>
      <td id="today-time"></td>
      </tr>
      </tbody>
      </table>
      </div>

      </div>
      <iframe width="100%" height="500px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
      src={this.state.data.src}
      ></iframe>
      <br/>
      <small></small>
      </div>
      <div id="navigation-bar">
      <ul id="myTab" className="nav nav-tabs">
      {this.state.data.children.map(({link,display},index) =>
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
