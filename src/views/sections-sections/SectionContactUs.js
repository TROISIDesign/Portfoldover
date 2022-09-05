import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionContactUs() {
  return (
    <>
      <div className="section section-contactus cd-section" id="contact-us">
        {/* ********* CONTACT US 1 ********* */}
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/soroush-karimi.jpg").default +
              ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Card className="card-contact no-transition">
                  <CardTitle className="text-center" tag="h3">
                    <h3>Reach Out</h3>
                  </CardTitle>
                  <Row>
                    <Col className="ml-auto" md="5">
                      <CardBody>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="nc-icon nc-pin-3" />
                          </div>
                          <div className="description">
                            <h4 className="info-title">Postal Mail Only:</h4>
                            <p>
                              242 Cambridge St., <br />
                              Boston, MA, 02114 <br />
                              USA
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="nc-icon nc-badge" />
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              Call, Text, Signal...
                            </h4>
                            <p>
                              <strong>+1 617-294-9247</strong> <br />
                              Anytime, 24/7 <br />
                              Lave a Message! Or Text. <br />
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Col>
                    <Col className="mr-auto" md="5">
                      <Form id="contact-form" method="post" role="form">
                        <CardBody>
                          <Row>
                            <Col md="12">
                              <FormGroup className="label-floating">
                                <label className="control-label"></label>
                                <Input name="" placeholder="Name" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup className="label-floating">
                            <label className="control-label"></label>
                            <Input
                              name="Email"
                              placeholder="Email"
                              type="email"
                            />
                          </FormGroup>
                          <FormGroup className="label-floating">
                            <label className="control-label">
                              Please be clear & concise with your message:
                            </label>
                            <Input
                              id="message"
                              name="message"
                              placeholder="I am interested in UX consulting because it seems like even though my team is smart and highly motivated we really have no idea what's going on with out customers! Help!!"
                              type="textarea"
                              rows="6"
                            />
                          </FormGroup>
                          <Row>
                            <Col md="6">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" />
                                  {/* FIGURE OUT HOW TO ADD CAPTHCA,  plus:  https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component */}
                                  I'm not a robot !{" "}
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <Button
                                className="pull-right"
                                color="primary"
                                type="submit"
                              >
                                Send Away
                              </Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Form>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END CONTACT US 1 ********* */}
      </div>
    </>
  );
}

export default SectionContactUs;
