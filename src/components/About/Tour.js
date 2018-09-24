import React, { Component } from "react";
import { Row, Col } from "antd";

// Normal Photos
import Interior_Shot from "../../assets/images/About/interior-section-3.jpg";
import QuoteMark from "../../assets/images/Common/quote_start.svg";

// PEOPLE
import Maria from "../../assets/images/maria.jpg";
import Irene from "../../assets/images/irene.jpg";

class Tour extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="maintainence-section">
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 14 }} style={{ padding: "9px" }}>
            <div className="text-content-wrapper">
              <div className="top-block">
                <p className="title">PLEASE JOIN US!</p>
                <br />
                <p className="sub-title">OUR OPEN HOUSE</p>
                <p className="content">
                  Please join us every Saturday and Sunday from 2 pm to 4 pm for
                  our Open House, or call or text Maria Rodin at +1 (416) - 903
                  - 1354 or Martin Rodin at + 1 (647) - 896 - 1354 to set up a
                  private viewing at your convenience.
                </p>
                <br />
                <p className="sub-title">Connect with our Real Estate Agents</p>
                <Row gutter={16}>
                  <Col
                    xs={{ span: 24 }}
                    md={{ span: 10 }}
                    style={{ padding: "9px" }}
                  >
                    <img src={Maria} alt="Maria" style={{ width: "100%", paddingBottom: "10px" }} />
                <br />  <br />
                    <p className="sub-title">Maria Rodin</p>
                    <p className="content">
    
                    OFFICE: <br />
                    905.707.8001<br />
                    <br />
                    MOBILE: <br />
                    416.903.1354<br />
                    <br />
                    EMAI: L<br />
                    mariarodin@royallepage.ca
                    </p>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    md={{ span: 10 }}
                    style={{ padding: "9px" }}
                  >
                    <img src={Irene} alt="Irne" style={{ width: "100%", paddingBottom: "10px" }} />
                    <br />  <br />
                    <p className="sub-title">IRINA SAVTCHENKO</p>
                    <p className="content">
        
                    OFFICE: <br />
                    905.707.8001<br />
                    
                    <br />
                    MOBILE: <br />
                    416.903.1329<br />
                    <br />
                    
                    EMAIL:<br />
                    irinasavtchenko@royallepage.ca
                    </p>
                  </Col>

                  <Col xs={{ span: 24 }}>
                  <br />
                  <p className="content">
                  <b  className="sub-title"> Spoken Languages</b> <br />
                Russian / Russe, English / Anglais, Spanish / Espagnol
                <br />
                <br />
                <b  className="sub-title">Areas Serviced</b>  <br />
                Maple, Markham, Newmarket, Toronto
                <br />
                <br />
                <b className="sub-title">Areas of Expertise</b> <br />
                Multi-Residential, Buyer Representation, Condominiums, Rentals, First Time Buyers, New Condominiums, New Home Sales
                </p>
                  </Col>
                  
                </Row>
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
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYWbNW38pK4gRYXq9epqKM9A&key=AIzaSyDRrjKopO7-dhO-W1xDKiSyYGYBcbsWayU"
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
