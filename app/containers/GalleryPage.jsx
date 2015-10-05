import React from "react";
import Layout from "containers/Layout";
import jQuery from "jquery";


import styles2 from "./supersized.shutter.css";
import styles3 from "./supersized.css";
import $1 from "./supersized.3.2.7.min.js";
import $2 from "./supersized.shutter.min.js";

export default class GalleryPage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <Layout>
			<h2>Gallery</h2>
		</Layout>;
	}
}
