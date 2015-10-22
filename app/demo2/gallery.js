import React from 'react';
import "./gallery.less";
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/src/ImageGallery.scss";
import { connect} from 'react-redux';



export default class Gallery extends React.Component {

  render() {
    let {slides}=this.props;
    return(
      <ImageGallery
        items={slides}
        autoPlay={true}
        slideInterval={4000}
        id="image-gallery"/>)

  }
}

function mapStateToProps(state) {
  //返回的是component的 property,需要返回一个object()
  return  {slides: state.info.gallery}
}

export default connect(mapStateToProps)(Gallery);
