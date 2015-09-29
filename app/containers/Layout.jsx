import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <div>
			<ul>
				<li>The <Link to="home">home</Link> page.</li>
				<li>The <Link to="gallery">gallery</Link> page.</li>
				<li>The <Link to="phone">phone</Link> page.</li>
				<li>The <Link to="map">map</Link> page.</li>
			</ul>
			{this.props.children}
		</div>;
	}
}
