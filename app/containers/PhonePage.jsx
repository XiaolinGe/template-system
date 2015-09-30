import React from "react";
import Layout from "containers/Layout";
import styles from "./phone.less"


class InfoBox extends React.Component {

    componentWillMount() {
        this.state = this.state || {};
        this.state.hovered = false;
    }

    componentDidMount() {
        React.findDOMNode(this.refs.img).addEventListener("mouseover", this.onOver.bind(this));
        React.findDOMNode(this.refs.img).addEventListener("mouseout", this.onOut.bind(this));
    }

    componentWillUnmount() {
        React.findDOMNode(this.refs.img).removeEventListener("mouseover", this.onOver);
        React.findDOMNode(this.refs.img).removeEventListener("mouseout", this.onOut);
    }

    onOver() {
        this.setState({hovered: true});
    }

    onOut() {
        this.setState({hovered: false});
    }

    render() {
        let divStyle = {
            background: "url('/images/icon1-bw.jpg') no-repeat top left"

        };
        let hoveredStyle = {
            background: "url('/images/icon1.jpg') no-repeat top left"
        };
        console.log(this.props.data);
        return (
            <div className={styles.inforbox}>
                <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id={this.props.data.id}>
                    <img src={this.props.data.img} alt="image" width="100%"/>
                </div>
                <h4>{this.props.data.title}</h4>

                <div>{this.props.data.content}</div>
            </div>
        );
    }
}

let data1 = {
    "img": "/images/hexagon.png",
    "id": "img1",
    "title": "ABOUT",
    "content": "The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."
};
let data2 = {
    "img": "/images/hexagon.png",
    "id": "img2",
    "title": "ABOUT",
    "content": "The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."
};
let data3 = {
    "img": "/images/hexagon.png",
    "id": "img3",
    "title": "ABOUT",
    "content": "The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."
};

export default class PhonePage extends React.Component {

    render() {
        return <Layout>
            <div className={styles.infor}>
                <InfoBox data={data1}/>
                <InfoBox data={data2}/>
                <InfoBox data={data3}/>
            </div>
        </Layout>;
    }
}




