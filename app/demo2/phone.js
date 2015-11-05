import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import "./phone.less";
import { connect } from 'react-redux';





class InfoBoxAbout extends React.Component {

  divStyle(icon) {
    return {
      background: `url('${icon}') no-repeat top left`
    };
  }


  hoveredStyle(hoveredIcon){
    return {
      background: `url('${hoveredIcon}') no-repeat top left`
    };
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


  render() {
    let {icon,img,title,content,hoveredIcon} = this.props.phone_about;


    return (
      <div className="inforbox" id="information-1">
      <div ref="img" style={this.state.hovered? this.hoveredStyle(hoveredIcon): this.divStyle(icon)} id="img1">
      <img src={img} alt="image" width="35%"/>
                </div>
      <h4>{title}</h4>

                <div className="content">

      {content}
                </div>

            </div>
        );
    }
}




class InfoBoxTime extends React.Component {
  divStyle(icon) {
    return {
      background: `url('${icon}') no-repeat top left`
    };
  }


  hoveredStyle(hoveredIcon){
    return {
      background: `url('${hoveredIcon}') no-repeat top left`
    };
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

  render() {
    let {icon,hoveredIcon,img,title,workingHours} = this.props.phone_time;

    return (
      <div className="inforbox" id="information-2">
      <div ref="img" style={this.state.hovered? this.hoveredStyle(hoveredIcon): this.divStyle(icon)} id="img2">
      <img src={img} alt="image" width="35%"/>
      </div>
      <h4>{title}</h4>

                <div className="content">
      {this.props.children}
      <table className="timeTable">
      <tbody>
      {workingHours.map(({days,from_times,to_times},index)=>(
        <tr key={index}  className="information-text-li" id="information-text-li-0">
        <td className="days">{days}</td>
        <td className="times">From </td>
        <td className="times"> {from_times} </td>
        <td className="times"> To </td>
        <td className="times"> {to_times}</td>
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

  divStyle(icon) {
    return {
      background: `url('${icon}') no-repeat top left`
    };
  }


  hoveredStyle(hoveredIcon){
    return {
      background: `url('${hoveredIcon}') no-repeat top left`
    };
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

  render() {

    let {icon,content,hoveredIcon,img,title} = this.props.phone_contact;
    let {address,phone_en,phone_cn,email} = content;

    return (
      <div className="inforbox" id="information-3">
      <div ref="img" style={this.state.hovered? this.hoveredStyle(hoveredIcon): this.divStyle(icon)} id="img3">
      <img src={img} alt="image" width="35%"/>
      </div>
      <h4>{title}</h4>

      <div className="content">
      <p> Address: {address} </p>
      <p> Phone (Englis): {phone_en}</p>
      <p> Phone (中文): {phone_cn}</p>
      <p> Email: {email}</p>
      </div>

      </div>
    );
  }
}


class Phone extends React.Component {

  render() {
    let {phone_about,phone_time,phone_contact} = this.props;

    return (
      <div className="infor">
      <InfoBoxAbout  phone_about={phone_about} />
      <InfoBoxTime phone_time={phone_time} />
      <InfoBoxContact phone_contact={phone_contact} />
      </div>);
  }

}

function mapStateToProps(state) {
  let [[base_info],gallery,layout,workinghours] = state.info;

  let phone={
    phone_about:{
      content: base_info.introduction,
      hoveredIcon: base_info.about_hoveredIcon,
      icon: base_info.about_icon,
      img: base_info.about_img,
      title: base_info.about_title
    },
    phone_contact:{
      content:{
        address: base_info.address,
        phone_en: base_info.phone_en,
        phone_cn: base_info.phone_cn,
        email: base_info.email
      },
      hoveredIcon: base_info.time_hoveredIcon,
      icon: base_info.time_icon,
      img: base_info.contact_img,
      title: base_info.time_title
    },
    phone_time:{
      hoveredIcon: base_info.contact_hoveredIcon,
      icon: base_info.contact_icon,
      img: base_info.contact_img,
      title: base_info.time_title,
      workingHours: workinghours
    }
  }
  return phone
}

export default connect(mapStateToProps)(Phone);
