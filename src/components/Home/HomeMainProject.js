import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeMainProject extends Component {
  render() {
    return (
      <div
        className="latest-projects-block"

      >
       <iframe src="https://www.360homephoto.com/new_gallery/s88102/pano/tour.html"  style={{
         width: "100%",
         height: "100%",
       }}/>
      </div>
    );
  }
}

export default HomeMainProject;
