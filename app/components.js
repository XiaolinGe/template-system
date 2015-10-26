import React from "react";
import ReactDOM from "react-dom";


export class HoveredComponent extends React.Component {

  divStyle(icon){
    return {
      background: `url('${icon}') no-repeat top left`
    };
  }

  hoveredStyle(hoveredIcon){
    return  {
      background: `url('${hoveredIcon}') no-repeat top left`
    };

  }

  style(icon,hoveredIcon){
    return this.state.hovered? this.hoveredStyle(hoveredIcon): this.divStyle(icon);
  }

  componentWillMount() {
    this.state = this.state || {};
    this.state.hovered = false;
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.img).addEventListener("mouseover", this.onOver.bind(this));
    ReactDOM.findDOMNode(this.refs.img).addEventListener("mouseout", this.onOut.bind(this));
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.refs.img).removeEventListener("mouseover", this.onOver);
    ReactDOM.findDOMNode(this.refs.img).removeEventListener("mouseout", this.onOut);
  }

  onOver() {
    this.setState({hovered: true});
  }

  onOut() {
    this.setState({hovered: false});
  }

}
