import React, { Component } from "react";
import { Row, Col } from "antd";

// Normal Photos
import Interior_Shot from "../../assets/images/About/interior-section-3.jpg";
import QuoteMark from "../../assets/images/Common/quote_start.svg";

class Maintanence extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="maintainence-section">
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 24 }} style={{ padding: "9px" }}>
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

export default Maintanence;
