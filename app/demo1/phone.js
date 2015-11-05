import React from "react";
import ReactDOM from "react-dom";
import "./phone.less";
import { connect } from 'react-redux';
import {HoveredComponent} from '../components';

class InfoBoxAbout extends HoveredComponent {


  render() {
  //  let {introduction} = this.props.base_info;
    let {icon,hoveredIcon,img,title,content} = this.props.phone_about;
    let style = this.style(icon,hoveredIcon);

    return (
      <div className="inforbox" id="information-1">
      <div ref="img" style= {style} >
      <img src={img} alt="image" width="100%"/>
      </div>
      <h4>{title}</h4>

      <div className="content">

      {content}
      </div>

      </div>
    );
  }
}




class InfoBoxTime extends HoveredComponent {



  render() {
    let {phone_time,icon,img,title,hoveredIcon,workingHours} = this.props.phone_time;
    let style = this.style(icon,hoveredIcon);
    return (
      <div className="inforbox" id="information-2">
        <div ref="img" style={style} >
        <img src={img} alt="image" width="100%"/>
      </div>
      <h4>{title}</h4>

      <div className="content">

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




class InfoBoxContact extends HoveredComponent {

  render() {
    let {icon,content,hoveredIcon,img,title} = this.props.phone_contact;
    let {address,phone_en,phone_cn,email} = content;
    let style = this.style(icon,hoveredIcon);
    console.log(title);

    return (<div className="inforbox" id="information-3">
                <div ref="img" style={style} >
                 <img src={img} alt="image" width="100%" />
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
        return(
            <div className='infor'>
                <InfoBoxAbout phone_about={phone_about} />
                <InfoBoxTime  phone_time={phone_time} />
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
      img: base_info.time_img,
      title: base_info.contact_title
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
