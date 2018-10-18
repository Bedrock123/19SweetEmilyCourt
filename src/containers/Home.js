import React, { Component } from "react";
import HeroGallery from "../components/Home/HeroGallery";
import HomeTextBlock from "../components/Home/HomeTextBlock";
import Projects from "../components/Home/HomeProjects";
import DocumentTitle from "react-document-title";
import Gallery from "../components/About/Gallery";
import OurTeam from "../components/About/OurTeam";
import Maintanence from "../components/About/Maintanence";
import Tour from "../components/About/Tour";

class Home extends Component {
  // Home Screen https://projects.invisionapp.com/d/main#/console/15461363/321299146/inspect
  render() {
    return (
      <DocumentTitle title={"Home | 19 Sweet Emily Court"}>
        <div className="home-wrapper">
          <HeroGallery />
          <HomeTextBlock
            title="A DREAM HOME IN PERFECT AREA!"
            description={
              "Come visit this beautiful luxury mansion in the Upper Thornhill Estates! It contains 4 bedrooms and 3 bathrooms in an approximately 6000 sq.ft of luxury living space. This property is in a child safe cul-de-sac and is located close to highly rated schools, shopping centers, and much more. In addition, the mansion contains a sauna, customized kitchen, and many more upgrades listed below. Don’t miss the opportunity to make this beautiful luxury mansion yours! Call us for a private viewing. "
            }
            link={{
              cta: "LEARN MORE",
              linkName: "SEE THE MLS LISTING",
              url:
                "http://v3.torontomls.net/Live/Pages/Public/Link.aspx?Key=849b156ee0f1456caa6d2294deb0869f&App=TREB"
            }}
          />

          <Gallery />
          <OurTeam />
          <Tour />
          <br />
          <Maintanence />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
