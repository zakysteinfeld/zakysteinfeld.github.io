import React from "react";
import { Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-lg section-hero section-shaped">
            <div className="shape shape-style-1 shape-default"></div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col lg="8">
                    <Row>
                      <Col lg="5">
                        <img
                          alt="..."
                          className="img-fluid image-profile shadow-lg"
                          src={require("assets/img/pict.jpg")}
                        />
                      </Col>
                      <Col className="sf-pro-rounded" lg="7">
                        <p className="lead text-white hi-text">Hi.</p>
                        <p className="text-white">
                          &nbsp;&nbsp;&nbsp;&nbsp;I'm <text className="boldedText-Intro">Zaky</text>, I'm a Front End developer currently, using Javascript framework <text className="boldedText-Intro">React JS</text> with sepaciality with <text className="boldedText-Intro">.NET(C#)</text> on the back.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
