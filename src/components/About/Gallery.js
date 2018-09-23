import React, { Component } from "react";

import { clearTimeout } from "timers";
import Scroll_Down_Arrow from "../../assets/images/Common/scroll_down_arrow.svg";

// Gallery Images

import s88102_6  from  "../../assets/images/House/s88102-6.jpg"
import s88102_7  from  "../../assets/images/House/s88102-7.jpg"
import s88102_8  from  "../../assets/images/House/s88102-8.jpg"
import s88102_9  from  "../../assets/images/House/s88102-9.jpg"
import s88102_10 from  "../../assets/images/House/s88102-10.jpg"
import s88102_11 from  "../../assets/images/House/s88102-11.jpg"
import s88102_12 from  "../../assets/images/House/s88102-12.jpg"
import s88102_13 from  "../../assets/images/House/s88102-13.jpg"
import s88102_14 from  "../../assets/images/House/s88102-14.jpg"
import s88102_15 from  "../../assets/images/House/s88102-15.jpg"
import s88102_16 from  "../../assets/images/House/s88102-16.jpg"
import s88102_17 from  "../../assets/images/House/s88102-17.jpg"
import s88102_18 from  "../../assets/images/House/s88102-18.jpg"
import s88102_19 from  "../../assets/images/House/s88102-19.jpg"
import s88102_20 from  "../../assets/images/House/s88102-20.jpg"
import s88102_21 from  "../../assets/images/House/s88102-21.jpg"
import s88102_22 from  "../../assets/images/House/s88102-22.jpg"
import s88102_23 from  "../../assets/images/House/s88102-23.jpg"
import s88102_24 from  "../../assets/images/House/s88102-24.jpg"
import s88102_25 from  "../../assets/images/House/s88102-25.jpg"


var infiniteLoop;

class Gallery extends Component {
  // Rotating Gallery Section
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          image: s88102_6,
          active: true
        },
        {
          image: s88102_7,
          active: false
        },
        {
          image: s88102_8,
          active: false
        },
        {
          image: s88102_9,
          active: false
        },
        {
          image: s88102_10,
          active: false
        },
        {
          image: s88102_11,
          active: false
        },
        {
          image: s88102_12,
          active: false
        },
        {
          image: s88102_13,
          active: false
        },
        {
          image: s88102_14,
          active: false
        },
        {
          image: s88102_15,
          active: false
        },
        {
          image: s88102_16,
          active: false
        },
        {
          image: s88102_17,
          active: false
        },
        {
          image: s88102_18,
          active: false
        },
        {
          image: s88102_19,
          active: false
        },
        {
          image: s88102_20,
          active: false
        },
        {
          image: s88102_21,
          active: false
        },
        {
          image: s88102_22,
          active: false
        },
        {
          image: s88102_23,
          active: false
        },
        {
          image: s88102_24,
          active: false
        },
        {
          image: s88102_25,
          active: false
        },
      ]
    };
    this.goToNextActiveImage = this.goToNextActiveImage.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
  }

  setActiveImage(nextActive, manual) {
    // Manually set the next active image in the gallery
    if (manual) {
      clearTimeout(infiniteLoop);
    }
    if (nextActive === 0) {
      nextActive = 0;
    } else {
      nextActive -= 1;
    }

    var newImageArray = this.state.imageGallery;
    newImageArray.forEach(function(galleryObject) {
      galleryObject.active = false;
    });
    newImageArray[nextActive].active = true;

    this.setState({ imageGallery: newImageArray });
  }
  goToNextActiveImage(manual) {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
    if (manual) {
      clearTimeout(infiniteLoop);
    }

    var imageCount = this.state.imageGallery.length;
    //
    var currentActiveImage = null;
    // For each image in the gallery check which one is active
    this.state.imageGallery.forEach(function(galleryObject, index) {
      if (galleryObject.active) {
        // Add one to it
        currentActiveImage = index + 1;
      }
    });
    // Get the next active inext ie thatone plus one
    var nextActiveImageIndex = currentActiveImage + 1;

    // If it is bigger than the array itself, go back to 0
    if (nextActiveImageIndex > imageCount) {
      nextActiveImageIndex = 0;
    }
    // Set the active image
    this.setActiveImage(nextActiveImageIndex);
  }
  goToNextPreviousImage(manual) {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
    if (manual) {
      clearTimeout(infiniteLoop);
    }

    var imageCount = this.state.imageGallery.length;
    //
    var currentActiveImage = null;
    // For each image in the gallery check which one is active
    this.state.imageGallery.forEach(function(galleryObject, index) {
      if (galleryObject.active) {
        // Add one to it
        currentActiveImage = index + 1;
      }
    });
    // Get the next active inext ie thatone plus one
    var nextActiveImageIndex = currentActiveImage - 1;

    // If it is bigger than the array itself, go back to 0
    if (nextActiveImageIndex > imageCount) {
      nextActiveImageIndex = 0;
    }
    if (nextActiveImageIndex === -1) {
      nextActiveImageIndex = this.state.imageGallery.length - 1;
    }
    // Set the active image
    this.setActiveImage(nextActiveImageIndex);
  }
  setInfiniteLoop() {
    var that = this;
    setTimeout(function() {
      that.goToNextActiveImage();
      that.setInfiniteLoop();
    }, 6500);
  }
  componentDidMount() {
    // Initiate The Timer
    infiniteLoop = this.setInfiniteLoop();
  }

  renderGalleryImages() {
    return this.state.imageGallery.map(function(item, i) {
      let className = "gallery-image-closed";
      function renderClassName() {
        if (item.active) {
          className = "gallery-image-open";
        }
        return className;
      }

      return (
        <div
          className={renderClassName()}
          key={i}
          style={{
            background:
              " linear-gradient(to top, rgba(4, 0, 0, 0.2), transparent,  transparent, transparent), url(" +
              item.image +
              ")"
          }}
        />
      );
    });
  }

  render() {
    return (
      <div className="gallery-secion">
        <img
          onClick={() => this.goToNextPreviousImage()}
          src={Scroll_Down_Arrow}
          alt="Scroll Arrow"
          className="scroll-arrow-left"
        />
        {this.renderGalleryImages()}
        <img
          src={Scroll_Down_Arrow}
          alt="Scroll Arrow"
          onClick={() => this.goToNextActiveImage(true)}
          className="scroll-arrow-right"
        />
      </div>
    );
  }
}

export default Gallery;
