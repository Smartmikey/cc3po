import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import Img1 from "../assets/images/image-section-v2.png";

//import icon
// import FeatherIcon from "feather-icons-react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">About Us</h2>
                  <p className="text-muted">The mission is to provide premium, quality, and standard services. Our ambition is to shape our Support team to help your business take off. Every successful business focuses on excellence. We will demand the highest level of service for our clients. We are using the personal touch as a measurable benchmark, step by step, from project onset to website launch, to ensure we deliver the website’s willingness to go above and beyond with the core. Dedication is the satisfaction of making a client comprehend the project’s vision.</p>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col lg={6}>
                <h5 className="mb-2 font-weight-normal text-primary">VALUE EXCELS IN EVERYDAY DECISIONS</h5>
                <h2 className="font-weight-normal line-height-1_4 mb-4">We Bring You <span className="font-weight-medium">Simplicity</span></h2>
                <p className="text-muted mb-4">The mission is to provide premium, quality, and standard services. Our ambition is to shape our Support team to help your business take off. Every successful business focuses on excellence. We will demand the highest level of service for our clients. We are using the personal touch as a measurable benchmark, step by step, from project onset to website launch, to ensure we deliver the website’s willingness to go above and beyond with the core. Dedication is the satisfaction of making a client comprehend the project’s vision.</p>
                <Link to="#" className="read-more f-18">Get in touch <span className="ml-2 right-icon f-24">&#8594;</span></Link>
              </Col>
              <Col lg={6}>
                <div className=" border-0">
                  <div className="about-img my-5 ">
                  <img src={Img1} alt="" className="img-fluid d-block mx-auto" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
