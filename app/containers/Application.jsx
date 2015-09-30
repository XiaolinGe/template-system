import React from "react";
import { RouteHandler } from "react-router";
import MainMenu from "components/MainMenu";

import styles from "./Application.less";

export default class Application extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	render() {
		var { loading } = this.props;
		return <div className={styles.this + (loading ? " " + styles.loading : "")}>
			<div className={styles.loadingElement}>loading...</div>
			<RouteHandler />
		</div>;
	}
}

Application.contextTypes = {
	stores: React.PropTypes.object
};
