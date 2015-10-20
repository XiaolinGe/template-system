import React from 'react';
import "./Component.less";
import Layout from "./Layout";
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/src/ImageGallery.scss";


var images = [
    {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
];



export default class Gallery extends React.Component {
    handleSlide(index) {
        console.log('Slide to ' + index);
    }

    render() {
        return(
        <Layout>
                <ImageGallery
            items={images}
            autoPlay={true}
            slideInterval={4000}
            onSlide={this.handleSlide}/>
                </Layout>)
    }
}
