import React from 'react';
import "./gallery.less";
import 'jquery';
import 'bootstrap';
import { connect} from 'react-redux';



var blank='blank';
var options = {
    // Functionality
    slideshow: 1,			// Slideshow on/off
    autoplay: 1,			// Slideshow starts playing automatically
    start_slide: 1,			// Start slide (0 is random)
    stop_loop: 0,			// Pauses slideshow on last slide
    random: 0,			// Randomize slide order (Ignores start slide)
    slide_interval: 3000,		// Length between transitions
    transition: 6,                      // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition_speed: 1000,		// Speed of transition
    new_window: 1,			// Image links open in new window/tab
    pause_hover: 0,			// Pause slideshow on hover
    keyboard_nav: 1,			// Keyboard navigation on/off
    performance: 1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
    image_protect: 1,			// Disables image dragging and right click with Javascript

    // Size & Position
    min_width: 0,			// Min width allowed (in pixels)
    min_height: 0,			// Min height allowed (in pixels)
    vertical_center: 1,			// Vertically center background
    horizontal_center: 1,			// Horizontally center background
    fit_always: 0,			// Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait: 1,			// Portrait images will not exceed browser height
    fit_landscape: 0,			// Landscape images will not exceed browser width
    // Components
    slide_links: blank,	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
    thumb_links: 1,			// Individual thumb links for each slide
    thumbnail_navigation: 1,			// Thumbnail navigation
    // Theme Options
    progress_bar: 1,			// Timer for each slide
    mouse_scrub: 0};


class Gallery extends React.Component {

   constructor(props) {
     super(props);
    }



    handleSlide(index) {
        console.log('Slide to ' + index);
    }


  showGallery() {
    let {gallery} = this.props;
    console.log(gallery);

    options['slides']=gallery;
    if(gallery.length>0){
      jQuery(function ($) {
        $.supersized(options);
      });
    }

  }
  componentDidMount(){

  }

  render() {
    this.showGallery();
        return(
<div>
                <div id="gallery">
                <div id="prevthumb"></div>
                <div id="nextthumb"></div>


                <a id="prevslide" className="load-item"></a>
                <a id="nextslide" className="load-item"></a>

                <div id="thumb-tray" className="load-item">

            </div>

                <div id="progress-back" className="load-item">
                <div id="progress-bar"></div>
                </div>


                <div id="controls-wrapper" className="load-item">
                <div id="controls">

                <a id="play-button"><img id="pauseplay" src="img/pause.png"/></a>


                <div id="slidecounter">
                <span className="slidenumber"></span> / <span className="totalslides"></span>
                </div>


                <div id="slidecaption"></div>

                <a id="tray-button"><img id="tray-arrow" src="img/button-tray-up.png"/></a>

                <ul id="slide-list"></ul>

            </div>
                </div>
                </div>

            </div>)
    }
}

function mapStateToProps(state) {
  let [_,gallery] = state.info;
  return  {gallery: gallery}
}

export default connect(mapStateToProps)(Gallery);
