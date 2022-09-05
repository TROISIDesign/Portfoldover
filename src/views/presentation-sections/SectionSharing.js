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

function SectionSharing() {
  return (
    <>
      <div className="section section-sharing section-dark" id="demoPay">
        <Container>
          <Row>
            <div className="title text-center">
              <h2 className="title">Ready to hire a web developer?</h2>
              <p className="description">
                You get <b>Free Unlimited Updates</b> until you piss me off and{" "}
                <b>Premium Support</b> on whatever I build for 6 months. You
                also have <b>27 days</b> to request one major overhaul if you're
                not happy with your life and/or you are a masochist.
              </p>
              <br />
              <a href="https://google.com" target="_blank">
                <Button color="danger" size="lg" type="button">
                  Next Step <i className="fa fa-chevron-right" />
                </Button>
              </a>
            </div>
            <Col className="ml-auto mr-auto" md="8">
              <div className="space-top" />
              <Row>
                <Col md="6"></Col>
              </Row>
            </Col>
            <Col className="offset-md-2 text-center" md="8" />
          </Row>
          <div className="text-center">
            <span>I literally take anything. Except Discover.:</span>
            <i className="fa fa-cc-paypal fa-pay mr-1" />
            <i className="fa fa-cc-visa fa-pay mr-1" />
            <i className="fa fa-cc-mastercard fa-pay mr-1" />
            <i className="fa fa-cc-amex fa-pay" />
            <br />
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSharing;
