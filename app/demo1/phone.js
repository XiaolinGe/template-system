import React from "react";
import ReactDOM from "react-dom";
import "./phone.less";
import { connect } from 'react-redux';
import {HoveredComponent} from '../components';

class InfoBoxAbout extends HoveredComponent {


  render() {
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
      {workingHours.map(({days,times},index)=>(
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




class InfoBoxContact extends HoveredComponent {

  render() {
    let {icon,content,hoveredIcon,img,title} = this.props.phone_contact;
    let {address,phone_en,phone_cn,email} = content;
    let style = this.style(icon,hoveredIcon);

    return (<div className="inforbox" id="information-3">
                <div ref="img" style={style} >
                 <img src={img} alt="image" width="100%" />
              </div>
                <h4>{title}</h4>
                <div className="content">
                 <p> {address} </p>
                 <p> {phone_en}</p>
                 <p> {phone_cn}</p>
                 <p> {email}</p>
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
      content: base_info.phone_about_content,
      hoveredIcon: base_info.phone_about_hoveredIcon,
      icon: base_info.phone_about_icon,
      img: base_info.phone_about_img,
      title: base_info.phone_about_title
    },
    phone_contact:{
      content:{
        address: base_info.address,
        phone_en: base_info.phone_en,
        phone_cn: base_info.phone_cn,
        email: base_info.email
      },
      hoveredIcon: base_info.phone_time_hoveredIcon,
      icon: base_info.phone_time_icon,
      img: base_info.phone_time_img,
      title: base_info.phone_time_title
    },
    phone_time:{
      hoveredIcon: base_info.phone_contact_hoveredIcon,
      icon: base_info.phone_contact_icon,
      img: base_info.phone_contact_img,
      title: base_info.phone_contact_title,
      workingHours: workinghours
    }
  }
  return phone
}

export default connect(mapStateToProps)(Phone);
