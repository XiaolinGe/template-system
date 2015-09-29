import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

/* eslint-disable no-multi-spaces */
// Only import from `containers/*`
import Application  from "containers/Application";

import HomePage     from "containers/HomePage";
import GalleryPage     from "containers/GalleryPage";
import PhonePage     from "containers/PhonePage";
import MapPage     from "containers/MapPage";

import NotFoundPage from "containers/NotFoundPage";

/* eslint-enable */

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="home" path="/home" handler={HomePage} />
		<Route name="gallery" path="/gallery" handler={GalleryPage} />
		<Route name="phone" path="/phone" handler={PhonePage} />
		<Route name="map" path="/map" handler={MapPage} />

		<DefaultRoute handler={HomePage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);
