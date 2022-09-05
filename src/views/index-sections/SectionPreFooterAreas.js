import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionPreFooterAreas() {
  return (
    <>
      <div className="wrapper">
        <div className="section">
          <Container className="tim-container"></Container>
        </div>
      </div>

      <div
        className="subscribe-line subscribe-line-transparent"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/sections/pavel-kosov.jpg").default +
            ")",
        }}
      >
        <Container>
          <Row>
            <Col lg="9" md="8" sm="8">
              <Form>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Enter your email..."
                    type="text"
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col md="3" sm="4">
              <Button block className="btn-round" color="info" type="button">
                Subscribe Now!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionPreFooterAreas;
