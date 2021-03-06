import React, { Component } from "react";
// Gallery Images

import s88102_1 from "../../assets/images/House/s88102-1.jpg";
import s88102_2 from "../../assets/images/House/s88102-2.jpg";
import s88102_3 from "../../assets/images/House/s88102-3.jpg";
import s88102_4 from "../../assets/images/House/s88102-4.jpg";
import s88102_5 from "../../assets/images/House/s88102-5.jpg";

import { clearTimeout } from "timers";

var infiniteLoop;

class HeroGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          src: s88102_1,
          id: "House_Image",
          active: true
        },
        {
          src: s88102_3,
          id: "Other_House_Image",
          active: false
        },
        {
          src: s88102_4,
          id: "Other_Kitchen_Image",
          active: false
        },
        {
          src: s88102_5,
          id: "Stairs_Image",
          active: false
        }
      ]
    };
    this.goToNextActiveImage = this.goToNextActiveImage.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
    this.renderTimers = this.renderTimers.bind(this);
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
  goToNextActiveImage() {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
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
  renderTimers() {
    var that = this;
    return this.state.imageGallery.map(function(item, i) {
      var className = "timer";
      if (item.active) {
        className = "timer timer-active";
      }
      var progressClassName = "";
      if (item.active) {
        progressClassName = "progress__value";
      }
      var currentIndex = i + 1;

      return (
        <div
          className={className}
          key={item.id}
          onClick={() => that.setActiveImage(currentIndex, true)}
        >
          <svg
            className="progress"
            width="42"
            height="42"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(232, 232, 232, 0.61)"
              strokeWidth="6"
            />
            <circle
              className={progressClassName}
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#FFF"
              strokeWidth="6"
            />
          </svg>
        </div>
      );
    });
  }

  // Home Screen Hero Gallery
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
          key={item.id}
          style={{
            background:
              " linear-gradient(to top, rgba(4, 0, 0, 0.74), transparent,  transparent, transparent), url(" +
              item.src +
              ")"
          }}
        />
      );
    });
  }
  render() {
    return (
      <div className="gallery-wrapper">
        <div className="timer-wrapper">
          <div className="timer-row">{this.renderTimers()}</div>
        </div>
        <div className="headline-wrapper">
          <div className="headline">
            <h1>19 Sweet Emily Court</h1>
            <h2> Maple, ON L6A 0G6, Canada</h2>
          </div>
        </div>
        {this.renderGalleryImages()}
      </div>
    );
  }
}

export default HeroGallery;
