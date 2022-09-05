import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionContent() {
  return (
    <>
      <div id="fadeInAnim">
        <div className="section section-content section-gray">
          <Container>
            <Row>
              <Col md="7">
                <div className="image-container">
                  <img
                    alt="..."
                    className="img"
                    src={
                      require("assets/img/presentation-page/ipad-content-2.png")
                        .default
                    }
                  />
                  <img
                    alt="..."
                    className="area-img add-animation"
                    src={
                      require("assets/img/presentation-page/ipad-left-img.jpg")
                        .default
                    }
                  />
                  <img
                    alt="..."
                    className="info-img add-animation"
                    src={
                      require("assets/img/presentation-page/ipad-right-img.jpg")
                        .default
                    }
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="section-description">
                  <h3 className="title">Device and Tool Agnostic</h3>
                  <h6 className="category">I make everything with anything</h6>
                  <h5 className="description">
                    No matter how you're currently engaging your customers or
                    how you think you'd like to be, I can put together something
                    that Is as good as a specialist in Android, iOS, Webapps,
                    Native, you name it.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionContent;
