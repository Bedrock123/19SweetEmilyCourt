import React, { Component } from "react";
import { Row } from "antd";
import HomeMainProject from "./HomeMainProject";
import HomeSubProject from "./HomeSubProject";
import Outdoor_Seating_Image from "../../assets/images/Home/Projects/Ourdoor_Seatings.jpg";
import Planning_Image from "../../assets/images/Home/Projects/Planning.jpg";
import Kitchen_Image from "../../assets/images/Home/Projects/Kitchen.jpg";

class HomeProjects extends Component {
  render() {
    return (
      <div className="home-projects-block-wrapper">
        <HomeMainProject
          image={Kitchen_Image}
          mainCTA={
            <p>
              SEE OUR <br />
              LATEST PROJECTS
            </p>
          }
          subCTA={"LATEST WORK"}
          displayLink={"PORTFOLIO"}
          link={"/"}
        />
      </div>
    );
  }
}

export default HomeProjects;
