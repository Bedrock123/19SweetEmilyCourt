import React, { Component } from "react";
import { Row, Col } from "antd";
import Logo from "../../assets/images/Common/logo.svg";


class Footer extends Component {
  // Global Bottom Footer
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-logo-row">
          <a href="/">
            <img
              src={Logo}
              alt="Micheal Robert Contstruction. A Whole House Approach."
              className="footer-logo"
            />
          </a>
        </div>
        <div className="footer-inner-wrapper">
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <div className="footer-block">
                <b className="footer-title">Maria Rodin</b>
                <div className="footer-inner-block">
                  <p>
                  Sales Representative  <br/>
                  <a href="tel:416-903-1354"> 416.903.1354</a> <br/>
                  <a href="mailto:mariarodin@royallepage.ca">irinasavtchenko@royallepage.ca</a>  
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <div className="footer-block">
                <b className="footer-title">Irina Savtchenko</b>
                <div className="footer-inner-block">
                  <p>
                  Sales Representative <br/>
                  <a href="tel:416-903-1354"> 416.903.1354</a> <br/>
                 <a href="mailto:mariarodin@royallepage.ca">mariarodin@royallepage.ca</a>  
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <div className="footer-block">
                <b className="footer-title">Royal LePage Terrequity Realty Brokerage</b>
                <div className="footer-inner-block">
                  <p>
                  1-10 ROYAL ORCHARD BLVD THORNHILL, ON L3T 3C3  
                  </p>
                </div>
              </div>
            </Col>
           
            


            <Col xs={{ span: 24 }}>
              <div className="footer-row">
                <p className="address">19 Sweet Emily Crt., Maple</p>
                <a className="phone-number">
                Luxurious 4 Bedroom Family Home!
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
