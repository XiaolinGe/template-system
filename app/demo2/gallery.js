import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/src/ImageGallery.scss";
import { connect} from 'react-redux';
import "./gallery.less";
import  Immutable from 'immutable';


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
  let [[base_info],gallery,menus,workinghours]=state.info;


  function rename(obj,old_key,new_key){
    obj[new_key]=obj[old_key];
    delete obj[old_key];
    return obj;
  }

  let copy = [];

  gallery.map(({image,thumb}) => {copy.push({original: image,
                                             thumbnail: thumb})});
  return  {slides:copy }
}

export default connect(mapStateToProps)(Gallery);
