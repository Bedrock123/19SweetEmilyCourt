import React, { Component } from "react";
import { Row, Col } from "antd";

// Normal Photos
import Interior_Shot from "../../assets/images/About/interior-section-3.jpg";
import QuoteMark from "../../assets/images/Common/quote_start.svg";

class Tour extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="maintainence-section">
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 14 }} style={{ padding: "9px" }}>
            <div className="text-content-wrapper">
              <div className="top-block">
                <p className="sub-title">OUR TEAM</p>
                <p className="title">CONCIERGE & MAINTENANCE</p>
                <p className="content">
                  Once we complete a project, the relationship we have with our
                  client is far from over. We stand by our work, guaranteeing
                  craftsmanship for 3 years - triple the remodeling industry
                  standard. While our dedicated project managers are on site
                  everyday, the MRC office is also fully staffed to ensure that
                  communication lines remain open beyond the job site. We are
                  committed to going the extra mile to earn complete client
                  satisfaction. Our goal is to maintain relationships that long
                  outlive our warranty.
                </p>
              </div>
              <div className="top-block">
                <p className="content">
                  Once we complete a project, the relationship we have with our
                  client is far from over. We stand by our work, guaranteeing
                  craftsmanship for 3 years - triple the remodeling industry
                  standard. While our dedicated project managers are on site
                  everyday, the MRC office is also fully staffed to ensure that
                  communication lines remain open beyond the job site. We are
                  committed to going the extra mile to earn complete client
                  satisfaction. Our goal is to maintain relationships that long
                  outlive our warranty.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 10 }} style={{ padding: "9px" }}>
            <div
              src={Interior_Shot}
              alt="Interior Of Office"
              className="interior-shot"
            >
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                style={{ border: "0" }}
                src="https://www.360homephoto.com/new_gallery/s88102/pano/tour.html"
                allowfullscreen
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tour;
