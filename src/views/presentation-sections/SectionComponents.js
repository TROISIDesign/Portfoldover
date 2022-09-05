import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={
                  require("assets/img/presentation-page/laptop-basic.png")
                    .default
                }
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/table.jpg").default}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={
                  require("assets/img/presentation-page/share-btn.png").default
                }
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={
                  require("assets/img/presentation-page/coloured-card-with-btn.png")
                    .default
                }
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={
                  require("assets/img/presentation-page/coloured-card.png")
                    .default
                }
              />
              <img
                alt="..."
                className="social-img"
                src={
                  require("assets/img/presentation-page/social-row.png").default
                }
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={
                  require("assets/img/presentation-page/pin-btn.png").default
                }
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">
                Design, Coding, User Experience, & Product Management
              </h3>
              <h6 className="category">
                The core elements of your business finely tuned and optimized
              </h6>
              <h5 className="description">
                See all that shit to the left just sort of floating very slowly?
                It's kinda weird. It came with a template I gutted and built a
                react single page app from scratch - but there was something so
                cheap and so unnerving about it; I just had to leave it in.
                Every time I see it it's A reminder to not do anything childish
                when consulting for you. Or your competitor.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
