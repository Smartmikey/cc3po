import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import Background Image
import Background from "../../assets/images/hero-1-bg-img.png";
import hero from "../../assets/images/overview-of-dental-caries-prevention-man-at-the-d-2022-01-11-02-18-15-utc.jpg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-1-bg bg-light" style={{ backgroundImage: `url(${Background})` }} id="home">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <h1 className="font-weight-medium mb-4">Providing Beyond Online Presence Services For Dentist </h1>
                <h1 className="hero-1-title font-weight-normal text-dark mb-4">We Help You To Boost Your Business</h1>
                <p className="text-muted mb-4 pb-3">We are dedicated to providing services ranging from website development, marketing, crreating online presence</p>
                <Link to="#" className="btn btn-primary">Get Started <span className="ml-2 right-icon">&#8594;</span></Link>
              </Col>
              <Col lg={6} md={10}>
                <div className=" mt-5 mt-lg-0">
                  <img src={hero} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
