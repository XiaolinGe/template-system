import React from "react";
import { Link } from "react-router";
import ReactLogo from "elements/ReactLogo";

export default class MainMenu extends React.Component {
	render() {
		return <div>
			<ReactLogo type="svg" /> <ReactLogo type="png" /> <ReactLogo type="jpg" />
			<h2>MainMenu:</h2>
			<ul>
				<li>The <Link to="home">home</Link> page.</li>
				<li>The <Link to="gallery">gallery</Link> page.</li>
				<li>The <Link to="phone">phone</Link> page.</li>
				<li>The <Link to="map">map</Link> page.</li>
			</ul>
		</div>;
	}
}
