import React from "react";
import { IndexLink } from "react-router";
import  "./layout.less";
import { connect } from 'react-redux';

export default class Layout extends React.Component {

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
      let {menus} = this.props;
        return <div className='contain'>
            <div className='nav'>
            <ul>
            {menus.map(({link,display},index) =>
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
function mapStateToProps(state) {
  let [a,b,menus] = state.info;
  return {menus: menus};
}

export default connect(mapStateToProps)(Layout);
