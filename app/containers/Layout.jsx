import React from "react";
import { Link } from "react-router";
import styles from "./layout.less";


export default class Layout extends React.Component {
    static getProps() {
        return {};
    }

    getAllElementsWithAttribute(attribute,val){

        return Array.from(document.getElementsByTagName('*')).filter(e=>e.getAttribute(attribute) ==val);
        //for (var i = 0, n = allElements.length; i < n; i++)
        //{
        //    if (allElements[i].getAttribute(attribute) ==val)
        //    {
        //        // Element exists with attribute. Add to array.
        //        matchingElements.push(allElements[i]);
        //    }
        //}
        //return matchingElements;
        //return document.getElementsByTagName('*').filter(e=>e.getAttribute(attribute) ==val);
    }




    componentDidUpdate(){
        console.log(11);
    }

    componentDidMount(){
        this.getAllElementsWithAttribute("data-reactid",".0.1").filter(e=>e).map(e=>e.style.height = "100%");
        this.getAllElementsWithAttribute("data-reactid",".0.1.1").map(e=>e.style.height = "100%").filter(e=>e);


    }
    render() {
        return <div className={styles.contain}>
        <div className={styles.nav}>
            <ul>
                <li><Link to="home">home</Link></li>
                <li><Link to="gallery">gallery</Link></li>
                <li><Link to="phone">phone</Link></li>
                <li><Link to="map">map</Link></li>
            </ul>
            <div className={styles.clear}></div>

        </div>
        <div>
            {this.props.children}
        </div>
     </div>;
    }
}
