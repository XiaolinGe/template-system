import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link ,DefaultRoute } from 'react-router';

import Home from './home';
import Gallery from './gallery';
import Phone from './phone';
import Map from './map';

ReactDOM.render((
        <Router>
        <Route path="home" component={Home}/>
        <Route path="gallery" component={Gallery}/>
        <Route path="phone" component={Phone}/>
         <Route path="map" component={Map}/>
    </Router>
), document.getElementById("app"))
