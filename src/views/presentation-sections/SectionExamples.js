import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-examples section-dark" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h2 className="title">Custom Pages & Applications</h2>
              <h5 className="description">
                This portfolio has a large number of example pages that give you
                the option to quickly ideate the basic flows for your website.
                From registering to creating a profile to delving into complex
                web applications, browse around and see what piques your
                interest.
              </h5>
            </div>
          </Row>
          <Row>
            <Col md="4">
              <div className="details-text">Twitter Rebuilt</div>
              <Card className="card-image card-hover-effect">
                <Link to="/twitter-redesign" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/twitter.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Error (422)</div>
              <Card className="card-image">
                <Link to="/error-422" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/422.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">User Generated Garbage</div>
              <Card className="card-image">
                <Link to="/discover" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/discover.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Login & Signup Pages</div>
              <Card className="card-image">
                <Link to="/login-page" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/login-page.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Blog Organization</div>
              <Card className="card-image">
                <Link to="/blog-post" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/blog-post.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">User Dashboards</div>
              <Card className="card-image">
                <Link to="/settings" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/settings.png")
                        .default
                    }
                  />
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <div className="details-text">Secure Payment Portals</div>
              <Card className="card-image">
                <Link to="/register-page" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/register.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">User Profiles</div>
              <Card className="card-image">
                <Link to="/profile-page" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/profile.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Product Pages</div>
              <Card className="card-image">
                <Link to="/product-page" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/product.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Contact Pages</div>
              <Card className="card-image">
                <Link to="/contact-us" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/contact-us.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Robust Search</div>
              <Card className="card-image">
                <Link to="/search-with-sidebar" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/search.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Error (404)</div>
              <Card className="card-image">
                <Link to="/error-404" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/404.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Backend Dashboards</div>
              <Card className="card-image">
                <Link to="/add-product" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/add-product.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">About Pages</div>
              <Card className="card-image card-hover-effect">
                <Link to="/about-us" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/about-us.png")
                        .default
                    }
                  />
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <div className="details-text">Content Feeds</div>
              <Card className="card-image">
                <Link to="/blog-posts" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/blog-posts.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Error (500)</div>
              <Card className="card-image">
                <Link to="/error-500" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/500.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Landing Pages</div>
              <Card className="card-image">
                <Link to="/landing-page" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/landing.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <div className="details-text">Full Ecommerce</div>
              <Card className="card-image">
                <Link to="/e-commerce" target="_blank">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/examples/ecommerce.png")
                        .default
                    }
                  />
                </Link>
              </Card>
              <Card className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/presentation-page/examples/more-brown.png")
                      .default
                  }
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionExamples;
