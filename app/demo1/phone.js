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
             </div>)
        ;
    }

}

function mapStateToProps(state) {
  return state.info.phone
}

export default connect(mapStateToProps)(Phone);
