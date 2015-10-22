import React from "react";
import Layout from "./Layout";
import "./phone.less";


class InfoBoxAbout extends React.Component {


    constructor(props) {
        super(props);
        this.state={};
        $.ajax({
            type: "GET",
            url: "json/phone_about.json",
            async: false,
            success : function(data) {
                console.log(data);
                this.state.about=data;
            }.bind(this)
        });
         $.ajax({
            type: "GET",
            url: "json/phone_time.json",
            async: false,
            success : function(data) {
                console.log( data);
                this.state.time=data;
            }.bind(this)
         });
           $.ajax({
            type: "GET",
            url: "json/phone_contact.json",
            async: false,
            success : function(data) {
                console.log(data);
                this.state.contact=data;
            }.bind(this)
        });
    }

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
        console.log("data"+this.state.about.icon);
        let icon = this.state.about.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
        let hoveredIcon = this.state.about.hoveredIcon;

        let hoveredStyle = {
            background: "url('" + hoveredIcon + "') no-repeat top left"
        };


        return (
            <div className="inforbox" id="information-1">
                <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id={this.state.about.id}>
                    <img src={this.state.about.img} alt="image" width="35%"/>
                </div>
                <h4>{this.state.about.title}</h4>

                <div className="content">
                    {this.props.children}
                </div>

            </div>
        );
    }
}




class InfoBoxTime extends React.Component {


    constructor(props) {
        super(props);
        this.state={};
        $.ajax({
            type: "GET",
            url: "json/phone_about.json",
            async: false,
            success : function(data) {
                console.log(data);
                this.state.about=data;
            }.bind(this)
        });
         $.ajax({
            type: "GET",
            url: "json/phone_time.json",
            async: false,
            success : function(data) {
                console.log( data);
                this.state.time=data;
            }.bind(this)
         });
           $.ajax({
            type: "GET",
            url: "json/phone_contact.json",
            async: false,
            success : function(data) {
                console.log(data);
                this.state.contact=data;
            }.bind(this)
        });
    }

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
        console.log("data"+this.state.time.icon);
        let icon = this.state.time.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
        let hoveredIcon = this.state.time.hoveredIcon;

        let hoveredStyle = {
            background: "url('" + hoveredIcon + "') no-repeat top left"
        };


        return (
            <div className="inforbox" id="information-2">
                <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id={this.state.time.id}>
                    <img src={this.state.time.img} alt="image" width="35%"/>
                </div>
                <h4>{this.state.time.title}</h4>

                <div className="content">
                    {this.props.children}
                </div>

            </div>
        );
    }
}




class InfoBoxContact extends React.Component {


    constructor(props) {
        super(props);
        this.state={};
        $.ajax({
            type: "GET",
            url: "json/phone_about.json",
            async: false,
            success : function(data) {
                console.log(data);
                this.state.about=data;
            }.bind(this)
        });
         $.ajax({
            type: "GET",
            url: "json/phone_time.json",
            async: false,
            success : function(data) {
                console.log( data);
                this.state.time=data;
            }.bind(this)
         });
           $.ajax({
            type: "GET",
            url: "json/phone_contact.json",
            async: false,
            success : function(data) {
                console.log(data);
                this.state.contact=data;
            }.bind(this)
        });
    }

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
        console.log("data"+this.state.contact.icon);
        let icon = this.state.contact.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
        let hoveredIcon = this.state.contact.hoveredIcon;

        let hoveredStyle = {
            background: "url('" + hoveredIcon + "') no-repeat top left"
        };


        return (
            <div className="inforbox" id="information-3">
                <div ref="img" style={this.state.hovered? hoveredStyle:divStyle} id={this.state.contact.id}>
                    <img src={this.state.contact.img} alt="image" width="35%"/>
                </div>
                <h4>{this.state.contact.title}</h4>

                <div className="content">
                    {this.props.children}
                </div>

            </div>
        );
    }
}


let data1 = {
    "img": "/images/hexagon.png",
    "id": "img1",
    "icon": "/images/icon1-bw.jpg",
    "hoveredIcon": "/images/icon1.jpg",
    "title": "ABOUT",
    "content": ["The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."]
};

let data2 = {
    "img": "/images/hexagon.png",
    "id": "img2",
    "icon": "/images/icon2-bw.jpg",
    "hoveredIcon": "/images/icon2.jpg",
    "title": "ABOUT",
    "content": ["The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."]
};
let data3 = {
    "img": "/images/hexagon.png",
    "id": "img3",
    "icon": "/images/icon3-bw.jpg",
    "hoveredIcon": "/images/icon3.jpg",
    "title": "ABOUT",
    "content": ["3-5 Birkenhead ave", "Birkenhead, Auckland", "", "Phone (English): 09 418 1390", "Phone (中文): 021 022 00379", "Email: info@jibble.co.nz"]


};


export default class PhonePage extends React.Component {

    render() {
        let workingHours = [
            {
                "days": "Today:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Monday:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Tuesday:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Wednesday:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Thursday:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Friday:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Saturday:",
                "times": "9:00am - 6:00pm"
            },
            {
                "days": "Sunday:",
                "times": "9:00am - 6:00pm"
            }
        ];
        return (
            <div className="infor">
      <InfoBoxAbout url="json/phone_about.json"  id="information-1" className="information">
                    <p>The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and
                        where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a
                        broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by
                        clicking on the tiles above.</p>
                </InfoBoxAbout>
      <InfoBoxTime url="json/phone_time.json"  id="information-2" className="information">
                    <table className="timeTable">
                        <tdaby>
                            {workingHours.map(child=>(
                                <tr class="information-text-li" id="information-text-li-0">
                                    <td className="days">{child.days}</td>
                                    <td className="times">{child.times}</td>
                                </tr>))

                            }

                        </tdaby>
                    </table>

                </InfoBoxTime>
      <InfoBoxContact url="json/phone_contact.json"  id="information-3" className="information">
                    <p>3-5 Birkenhead ave,<br/>
                        Birkenhead, Auckland<br/>

                        <br/>
                        Phone (English): 09 418 1390<br/>
                        Phone (中文): 021 022 00379<br/>
                        Email: info@jibble.co.nz<br/>
                    </p>
                </InfoBoxContact>
            </div>)
        ;
    }

}
