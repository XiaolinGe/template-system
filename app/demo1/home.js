import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import  "./home.less";


class Home extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
      let {google_src} =  this.props;
	return (
	        <div className='home'>
                <iframe width="100%" height="100%" frameBorder="0" scrolling="no"
                        marginHeight="0" marginWidth="0"
                	    src={google_src}></iframe>
	        </div>
	);
    }
};

function mapStateToProps(state) {
  let [[base_info]] =  state.info;//[[],[],[]]
  //返回的是component的 property,需要返回一个object()
  console.log(base_info);
  return base_info;
}

export default connect(mapStateToProps)(Home);






