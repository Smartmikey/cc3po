import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Background from "../assets/images/service-icon-bg.png";
import Icon1 from "../assets/images/services-icon/website.png";
import Icon2 from "../assets/images/services-icon/digital-marketing.png";
import Icon3 from "../assets/images/services-icon/analysis.png";
import Icon4 from "../assets/images/services-icon/web-support.png";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Our Services</h2>
                  <p className="text-muted">Let's sit down together and determine the best path to develop your brand. Let us help you research, design, test, and refine analytics for your target audience. Build your visual story for Digital Branding with CC3PO.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon1} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Website Design</h4>
                  <p className="service-subtitle mb-4 f-15">Over 3 billion smartphone users globally, it is also where you need to be to maximize your customer engagement. A website is the foundation of your online presence. Experience and creativity; why not make it something you are proud of? Ready to start taking off online?</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon2} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Digital Marketing</h4>
                  <p className="service-subtitle mb-4 f-15">We grow brand awareness by utilizing modern creative strategies to showcase your brand and product to billions of users online using All significant platforms. Engaging content targeted at the right audience ensures your business will stand out online.</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon3} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Advanced Analytics</h4>
                  <p className="service-subtitle mb-4 f-15">Your ideas and products are worthy of attention. We'll help you collect detailed data about them. Identifying your clients' demographics, location, and demands will only help you serve them better — and improve your business to reach new targeted audiences through social media and Google Search advertisements.</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="card service-box text-center p-4">
                  <div className="service-icon-bg mx-auto avatar-xxl p-4" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="service-box-icon justify-content-center">
                      <img src={Icon4} alt="" className="img-fluid d-block" />
                    </div>
                  </div>
                  <h4 className="service-title mt-4 mb-3 f-18">Web/IT Support</h4>
                  <p className="service-subtitle mb-4 f-15">Supporting care for your technology needs and a remote and monitoring support service that will secure your business and ensure decisions, whatever it is, will provide growth for your business and build a repertoire with Clients. Do you need Support ASAP for your business?</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
