import React from 'react';
import { Router, Route ,IndexRoute} from 'react-router';
import { connect } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';

import Home from './home';
import Gallery from './gallery';
import Phone from './phone';
import Map from './map';
import Layout from './layout';
import {fetchInfoIfNeeded, deleteTodo} from './actions/index';

let history = createHashHistory();

class NoMatch extends React.Component{
    render(){
        return(<div>Not Found</div>);
    }
}

class App extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        const { dispatch, home,selectedReddit } = this.props;

        dispatch(deleteTodo(1));

    }
    render() {
        return (
                <Router history={history}>
                 <Route path="/" component={Layout}>
                     <IndexRoute component={Home} />
                     <Route path="home" component={Home}/>
                     <Route path="gallery" component={Gallery}/>;
                     <Route path="phone" component={Phone}/>
                     <Route path="map" component={Map}/>
                 </Route>
                  <Route path="*" component={NoMatch}/>
                </Router>

        );
    }
}
function mapStateToProps(state) {
    const { selectedReddit,home} = state;
    return {
        selectedReddit,
        home
    };
}

export default connect(mapStateToProps)(App);
