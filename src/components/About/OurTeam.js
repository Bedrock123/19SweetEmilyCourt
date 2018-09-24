import React, { Component } from "react";
import { Row, Col } from "antd";

class OurTeam extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="our-team-section">
        <div className="title-section">
          <p className="title">HUNDREDS OF THOUSANDS SPENT ON UPGRADES!!</p>
          <b>WELCOME TO YOUR NEW DREAM HOME </b>
          <br />
        </div>
        <Row gutter={16} className="text-section">
          <Col xs={{ span: 24 }} md={{ span: 8 }} style={{ padding: "9px" }}>
            <p>
              • $2,198,000 <br /> • Gleaming Hardwood <br />• Designer Crystal
              Chandeliers <br />• Beautiful Chef's Kitchen <br />• Granite
              Countertops <br />• Large Central Island <br />• Marble
              Backsplash/Kitchen <br />• Servery w/Walk-In Pantry Grand 2 Story
              Family Room <br />• Custom Gas Fireplace <br />• Double French
              Doors/Office <br />• Soaring 20 Ft. Ceilings in Foyer <br />•
              Fabulous Master Suite <br />• Featuring a Spa-Like Master Bath{" "}
              <br />• Smooth Ceilings Throughout <br />• Spacious, Light-Filled
              Bedrooms <br />• Custom Closet Organizers <br />• Custom Window
              Coverings <br />
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }} style={{ padding: "9px" }}>
            <p>
              • 2 Staircases <br />• Professionally Finished Basement <br />•
              Very Large Media Room <br />• Second Kitchen in the Basement{" "}
              <br /> • 5 P.C. Bath w/ Jacuzzi in • Basement <br />• Heated Floor{" "}
              <br />• Lots of Potlights w/LED <br />• Luxurious Custom Sauna{" "}
              <br />• Forced Air Central Vacuum <br />8 Feet High Doors <br />•
              Open Concept Living/Dining <br />3 Car Garage <br />• Stone/Brick
              Façade <br />• Cul De Sac <br />• Lots of Parks/Ponds in the Area{" "}
              <br />• Safe School District <br />• Close to all Amenities <br />
              • Too many Features to List!!! <br />
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }} style={{ padding: "9px" }}>
            <p>
              • 4 Bed <br />5 Bath <br />• 3500 - 5000 Sqft <br />• House
              Listing ID: N4225354 <br />• Lot Size 59 ft x 117 ft 21780 ft{" "}
              <br />• Gross Taxes for 2017 $8,534 <br />• Area Patterson <br />•
              Sub-Area/Community Patterson <br />• Property Type House <br />•
              Title Freehold <br />• Exterior Finish Brick <br />• Heating Type
              Forced Air <br />• Depth 117.95 Feet <br />• Frontage 59.45 Feet{" "}
              <br />
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OurTeam;
