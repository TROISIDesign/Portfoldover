import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionSections() {
  return (
    <>
      <div className="section section-sections section-gray">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">Websites you will love</h2>
              <h5 className="description">
                Browse from all of these sites that I built for various clients.
                I am the kind of developer who loves dealing with clients who
                don't know what they want and don't know how to write specs and
                just say "I'label know it when I see it". You people are really
                underappreciated.
              </h5>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Container fluid>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-1.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-2.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-3.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-4.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/team-cards-social.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/bg-pricing-card.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/white-pricing-card.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/team-member-card.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/testimonials-1.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/blog-bg-cards.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/our-products.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/projects-cards.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
              <Row></Row>
              <div></div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSections;
