import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// core components

function SectionOverview() {
  return (
    <>
      <div className="section section-overview">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title">Want four more things?</h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-money-coins" />
                      </div>
                      <CardTitle tag="h4">It's Worth It</CardTitle>
                      <p className="card-description">
                        I started consulting at the perfect time - when the
                        world wasn’t completely falling apart. Video exploded,
                        and my 15+ years in the space allowed me to actually
                        help people who's projects were on fire. I know how to
                        deliver, and I guarantee satisfaction to a reasonable
                        extent. Ask me what that's about!
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-watch-time" />
                      </div>
                      <CardTitle tag="h4">I'm Really Fun</CardTitle>
                      <p className="card-description">
                        I have an incredible sense of humour and my secondary
                        goal besides profit and performance is fun and laughter.
                        If people are laughing it's a guarantee they are
                        grinding much more than quiet and reserved. If you hire
                        me and you don't laugh then I will work my ass off to
                        turn you around.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="purple">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <CardTitle tag="h4">
                        I'm Surprisingly Affordable
                      </CardTitle>
                      <p className="card-description">
                        Seriously, "consulting" is for Bain and McK and all
                        those people who LBO a company, completely gut it to
                        death while borrowing against the assets and lining
                        their pockets, then bankrupting it and walking away like
                        that's an accomplishment. I charge what I need to house
                        and feed my family and the rest is all just icing. It's
                        fun.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="brown">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-align-center" />
                      </div>
                      <CardTitle tag="h4">Total Attention</CardTitle>
                      <p className="card-description">
                        If we sign a contract, whether for a day, a week, or,
                        let's stick to weekly; I am 100% focused and attuned to
                        you and your company for my entire working hours,
                        including availability off hours and
                        strategy/homework/prepwork when not face to face. Also,
                        I am happy to attend in person or remote, whichever
                        works better for you. Double-vaxxed double-boosted and I
                        take health seriously. But remote is great practice for
                        Async strategy.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionOverview;
