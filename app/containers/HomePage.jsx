import React from "react";
import Layout from "containers/Layout";
import styles from "./home.less"

export default class HomePage extends React.Component {
	static getProps() {
		return {};
	}


	render() {
		return <Layout>
			<div className={styles.home}>
				<iframe width="100%" height="100%" frameBorder="0" scrolling="no"
						marginHeight="0" marginWidth="0"
						src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1436170635521!6m8!1m7!1sEmPx53PkIOUAAAQqmWhsgw!2m2!1d-36.81214!2d174.726475!3f60.649238235862214!4f-16.318097902715365!5f0.7820865974627469"></iframe>

			</div>
		</Layout>;
	}
}
