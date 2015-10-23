import React from "react";
import Layout from "./Layout";
import "./phone.less";
import { connect } from 'react-redux';


class InfoBoxAbout extends React.Component {


    componentWillMount() {
        this.state = this.state || {};
        this.state.hovered = false;
    }

    componentDidMount() {
        React.findDOMNode(this.refs.img).addEventListener("mouseover", this.onOver.bind(this));
        React.findDOMNode(this.refs.img).addEventListener("mouseout", this.onOut.bind(this));
    }

    componentWillUnmount() {
        React.findDOMNode(this.refs.img).removeEventListener("mouseover", this.onOver);
        React.findDOMNode(this.refs.img).removeEventListener("mouseout", this.onOut);
    }

    onOver() {
        this.setState({hovered: true});
    }

    onOut() {
        this.setState({hovered: false});
    }

  render() {
    let {phone_about} = this.props;
   // console.log(phone_about);

        let icon = phone_about.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
    let hoveredIcon = phone_about.hoveredIcon;

    let hoveredStyle = {
      background: "url('" + hoveredIcon + "') no-repeat top left"
    };


    return (
      <div className="inforbox" id="information-1">
      <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id="img1">
      <img src={phone_about.img} alt="image" width="35%"/>
                </div>
      <h4>{phone_about.title}</h4>

                <div className="content">

      {phone_about.content}
                </div>

            </div>
        );
    }
}




class InfoBoxTime extends React.Component {


    componentWillMount() {
        this.state = this.state || {};
        this.state.hovered = false;
    }

    componentDidMount() {
        React.findDOMNode(this.refs.img).addEventListener("mouseover", this.onOver.bind(this));
        React.findDOMNode(this.refs.img).addEventListener("mouseout", this.onOut.bind(this));
    }

    componentWillUnmount() {
        React.findDOMNode(this.refs.img).removeEventListener("mouseover", this.onOver);
        React.findDOMNode(this.refs.img).removeEventListener("mouseout", this.onOut);
    }

    onOver() {
        this.setState({hovered: true});
    }

    onOut() {
        this.setState({hovered: false});
    }

  render() {
    let {phone_time} = this.props;
       // console.log(phone_time);
        let icon = phone_time.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
    let hoveredIcon = phone_time.hoveredIcon;

    let hoveredStyle = {
      background: "url('" + hoveredIcon + "') no-repeat top left"
    };


    return (
      <div className="inforbox" id="information-2">
      <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id="img2">
      <img src={phone_time.img} alt="image" width="35%"/>
      </div>
      <h4>{phone_time.title}</h4>

                <div className="content">
      {this.props.children}
      <table className="timeTable">
      <tbody>
      {phone_time.workingHours.map(({days,times},index)=>(
        <tr key={index}  className="information-text-li" id="information-text-li-0">
        <td className="days">{days}</td>
        <td className="times">{times}</td>
        </tr>))
      }
      </tbody>
      </table>
                </div>

            </div>
        );
    }
}




class InfoBoxContact extends React.Component {


    componentWillMount() {
        this.state = this.state || {};
        this.state.hovered = false;
    }

    componentDidMount() {
        React.findDOMNode(this.refs.img).addEventListener("mouseover", this.onOver.bind(this));
        React.findDOMNode(this.refs.img).addEventListener("mouseout", this.onOut.bind(this));
    }

    componentWillUnmount() {
        React.findDOMNode(this.refs.img).removeEventListener("mouseover", this.onOver);
        React.findDOMNode(this.refs.img).removeEventListener("mouseout", this.onOut);
    }

    onOver() {
        this.setState({hovered: true});
    }

    onOut() {
        this.setState({hovered: false});
    }

    render() {
        let {phone_contact} = this.props;
        let icon = phone_contact.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
      let hoveredIcon =phone_contact.hoveredIcon;

      let hoveredStyle = {
        background: "url('" + hoveredIcon + "') no-repeat top left"
      };


      return (
        <div className="inforbox" id="information-3">
        <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id="img3">
        <img src={phone_contact.img} alt="image" width="35%"/>
                </div>
        <h4>{phone_contact.title}</h4>

                <div className="content">
        {this.props.children}
        {phone_contact.content}
                </div>

            </div>
        );
    }
}


class PhonePage extends React.Component {

  render() {

    let {phone} = this.props;
    console.log(phone);
    let {phone_about,phone_time,phone_contact} = phone;
    console.log(phone_about);

        return (
            <div className="infor">
          <InfoBoxAbout  phone_about={phone.phone_about} > </InfoBoxAbout>
      <InfoBoxTime phone_time={phone.phone_time}></InfoBoxTime>
      <InfoBoxContact phone_contact={phone.phone_contact}> </InfoBoxContact>
            </div>)
        ;
    }

}

function mapStateToProps(state) {
  return {phone: state.info.phone}
}

export default connect(mapStateToProps)(PhonePage);
