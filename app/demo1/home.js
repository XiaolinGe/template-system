import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import  "./home.less";


class Home extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
      let {home} =  this.props;
      console.log(home);
	return (
	        <div className='home'>
                <iframe width="100%" height="100%" frameBorder="0" scrolling="no"
                        marginHeight="0" marginWidth="0"
                	    src={home.src}></iframe>
	        </div>
	);
    }
};

function mapStateToProps(state) {
  //返回的是component的 property,需要返回一个object()
  return  {home: state.info.home}
}

export default connect(mapStateToProps)(Home);






