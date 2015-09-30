import React from "react";
import { Link } from "react-router";
import styles from "./layout.less";


export default class Layout extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <div className={styles.nav}>
			<ul>
				<li><Link to="home">home</Link></li>
				<li><Link to="gallery">gallery</Link></li>
				<li><Link to="phone">phone</Link></li>
				<li><Link to="map">map</Link></li>
			</ul>
            <div className={styles.clear}></div>
			{this.props.children}
		</div>;
	}
}
