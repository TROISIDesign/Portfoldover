import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <ColorNavbar />
      <AboutUsHeader />
      <div className="main">
        <div className="section">
          <Container>
            <h3 className="title-uppercase">We build great products.</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </p>
            <h3 className="title-uppercase">We are what we do.</h3>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service. A fourth
              sentence even more bullshit than any one prior.
            </p>
            <h2 className="text-center creators">Resumes</h2>
            <h4 className="text-center creators">Choose Wisely</h4>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    {/* ADD PICTURE OF PDF RESUMES INSTEAD OF THESE GOONS */}
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("assets/img/faces/ayo-ogunseinde-2.jpg")
                              .default
                          }
                        />
                        <CardTitle tag="h4">Eric Thomson</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Resume for Product Management
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("assets/img/faces/joe-gardner-2.jpg")
                              .default
                          }
                        />
                        <CardTitle tag="h4">Sophia West</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Resume for Design
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("assets/img/faces/clem-onojeghuo-2.jpg")
                              .default
                          }
                        />
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Resume for Engineering
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <h3 className="more-info">Need more information?</h3>
            <Row className="coloured-cards">
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Blue Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Green Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Yellow Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
