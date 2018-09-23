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
              "Luxury Mansion 4+3 Bdrms In Upper Thornhill Estates! Approx. 6000 Sq.Ft of Luxury Living Space! Situated on Child Safe Cul-De-Sac on Premium 60X117 Ft. Lot. Boasts 2 Story Foyer & Family Room, 10Ft. Ceilings Main, 9Ft On 2nd & Bsmt. Elegant circular staircase with wrought iron railings to the second floor with 3 bedrooms and spacious master bedroom retreat with 6-piece ensuite and double walk-in closets. LOADED WITH UPGRADES: Custom Kitchen W/Cervery & W/I Pantry, Hardwood Floors & Mouldings Throughout, Spa Like Marble Master Ensuite, Custom Fireplace In Family Room, Granite/Marble Countertops, Prof. Finished Bsmt W/Lrg Rec and Media Rooms, 3 Bdrms, Kitchen, 5 pc Washroom with Large Jacuzzi and Custom Sauna. EXCELLENT LOCATION! Steps to High Ranking Schools, Parks and Shopping! Close to Hwy 404/407 and two Go-Stations. DON’T MISS THE OPPORTUNITY!"
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
