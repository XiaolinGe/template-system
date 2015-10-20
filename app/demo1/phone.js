import React from "react";
import ReactDOM from "react-dom";
import "./phone.less";

class InfoBox extends React.Component {

    componentWillMount() {
        this.state = this.state || {};
        this.state.hovered = false;
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.img).addEventListener("mouseover", this.onOver.bind(this));
        ReactDOM.findDOMNode(this.refs.img).addEventListener("mouseout", this.onOut.bind(this));
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this.refs.img).removeEventListener("mouseover", this.onOver);
        ReactDOM.findDOMNode(this.refs.img).removeEventListener("mouseout", this.onOut);
    }

    onOver() {
        this.setState({hovered: true});
    }

    onOut() {
        this.setState({hovered: false});
    }

    render() {
        let icon = this.props.data.icon;
        let divStyle = {
            background: "url('" + icon + "') no-repeat top left"

        };
        let hoveredIcon = this.props.data.hoveredIcon;

        let hoveredStyle = {
            background: "url('" + hoveredIcon + "') no-repeat top left"
        };

        let lines = Array.from(this.props.data.content);
        var content = lines.map(function (line) {
            return (<span>{line}<br/></span>);
        });
        return (
            <div className='inforbox'>
                <div ref="img" style={this.state.hovered? hoveredStyle:divStyle}
                     id={this.props.data.id}>
                    <img src={this.props.data.img} alt="image" width="100%"/>
                </div>
                <h4>{this.props.data.title}</h4>

                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


let data1 = {
    "img": "/demo1/images/hexagon.png",
    "id": "img1",
    "icon": "/demo1/images/icon1-bw.jpg",
    "hoveredIcon": "/demo1/images/icon1.jpg",
    "title": "ABOUT",
    "content": ["The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."]
};

let data2 = {
    "img": "/demo1/images/hexagon.png",
    "id": "img2",
    "icon": "/demo1/images/icon2-bw.jpg",
    "hoveredIcon": "/demo1/images/icon2.jpg",
    "title": "ABOUT",
    "content": ["The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above."]
};
let data3 = {
    "img": "/demo1/images/hexagon.png",
    "id": "img3",
    "icon": "/demo1/images/icon3-bw.jpg",
    "hoveredIcon": "/demo1/images/icon3.jpg",
    "title": "ABOUT",
    "content": ["3-5 Birkenhead ave", "Birkenhead, Auckland", "", "Phone (English): 09 418 1390", "Phone (中文): 021 022 00379", "Email: info@jibble.co.nz"]


};


export default class Phone extends React.Component {

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
        return(
            <div className='infor'>
                <InfoBox data={data1}>
                    <p>The only Dutch restaurant in New Zealand. It’s a place where the the Dutch feel at home, and
                        where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a
                        broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by
                        clicking on the tiles above.</p>
                </InfoBox>
            <InfoBox data={data2}>
            <table className='timeTable'>
            <tbody>
            {workingHours.map((child,index)=>(
                    <tr key={index} className="information-text-li" id="information-text-li-0">
                    <td className='days'>{child.days}</td>
                    <td className='times'>{child.times}</td>
                    </tr>))

            }

                        </tbody>
                    </table>

                </InfoBox>
                <InfoBox data={data3}>
                    <p>3-5 Birkenhead ave,<br/>
                        Birkenhead, Auckland<br/>

                        <br/>
                        Phone (English1): 09 418 1390<br/>
                        Phone (中文): 021 022 00379<br/>
                        Email: info@jibble.co.nz<br/>
                    </p>
                </InfoBox>
                </div>)
        ;
    }

}
