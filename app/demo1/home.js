import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import  "./home.less";


class Home extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
       let home =  this.props.home;
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
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(Home);





