import React from 'react';
import "./gallery.less";
import Layout from "./Layout";
import 'jquery';
import 'bootstrap';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/src/ImageGallery.scss";




export default class Gallery extends React.Component {

   constructor(props) {
        super(props);
          $.ajax({
            type: "GET",
            url: "json/gallery.json",
            async: false,
              success : function(data) {
                  console.log("gallery data "+ data);
                this.state = {slides: data};
            }.bind(this)
        });
    }


    handleSlide(index) {
        console.log('Slide to ' + index);
    }

    componentDidMount(){
    }

    render() {
        return(
          <Layout  url="/json/layout.json">
          <ImageGallery
          items={this.state.slides}
          autoPlay={true}
          slideInterval={4000}
          onSlide={this.handleSlide}
          id="image-gallery"/>




          </Layout>)
    }
}
