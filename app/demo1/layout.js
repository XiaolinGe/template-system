import React from "react";
import { IndexLink } from "react-router";
import  "./layout.less";

let data =[{"display":"home" ,"link":"/home"},
 {"display":"gallery" ,"link":"/gallery"},
 {"display":"phone" ,"link":"/phone"},
           {"display":"map" ,"link":"/map"}];


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
          $.ajax({
            type: "GET",
            url: this.props.url,
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

        this.getAllElementsWithAttribute("data-reactid",".0.1")
            .filter(e=>e)
            .map(e=>e.style.height = "100%");

        this.getAllElementsWithAttribute("data-reactid",".0.1.1")
            .map(e=>e.style.height = "100%")
            .filter(e=>e);

    }

    render() {

        return <div className='contain'>
            <div className='nav'>
            <ul>
            {data.map(({link,display},index) =>
                                 (<li key={index}><IndexLink to={link}>{display}</IndexLink></li>))}
        </ul>
            <div className='clear'></div>

        </div>
            <div>
            {this.props.children}
        </div>
            </div>;
    }
}
