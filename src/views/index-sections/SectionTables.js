import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Label,
  FormGroup,
  Input,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

function SectionTables() {
  return (
    <>
      <div className="section section-gray">
        <Container className="tim-container">
          <Row>
            <Col className="ml-auto mr-auto" md="8"></Col>
          </Row>
          <Row>
            <Col md="12">
              <h2 className="title">
                <strong>Flat Day Rate Consulting</strong>
              </h2>
            </Col>
            <Col className="ml-auto mr-auto" md="10">
              <Table className="table-shopping" responsive>
                <thead>
                  <tr>
                    <th className="text-center" />
                    <th />
                    <th className="text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={require("assets/img/tables/agenda.png").default}
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>Product Management Coach</strong>
                      <p>
                        I started PM at a large MNC building videoconferencing
                        solutions in 2003. After nearly a decade the market
                        shifted and I found incredible success at multiple
                        startups. I think I have some unique insights to offer
                        companies that are unsure of their product strategy.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>$</small>
                      849/day
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={require("assets/img/tables/stylus.jpg").default}
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>User Experience Advisory</strong>
                      <p>
                        Every aspect of UX is addressed and every employee takes
                        the responsibility they can handle. The best practices
                        and textbook procedures are just being written (~20
                        yrs), but living in product for two decades has
                        solidified a working, usuable structure that employees
                        will buy.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>$</small>
                      699/day
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={require("assets/img/tables/agenda.png").default}
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>Cross Functional Reset</strong>
                      <p>
                        More expensive because it is more intensive. More
                        interaction with more people. But the super- deluxe of
                        any team-buidling exercise, where everyone's strengths
                        are leveraged across different functions to unlock new
                        levels of productivity and ingenuity.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>$</small>
                      999/day
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={
                            require("assets/img/tables/evernote.png").default
                          }
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>Design Thinking Working</strong>
                      <p>
                        This is Design from conception to EOL, and everything in
                        between. Pure Design, UX, Program Mgmt, Development,
                        Product, C-Level, Customers and everyone learns
                        cross-functional like never before.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>$</small>
                      799/day
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" />
                    <td />
                    <td className="td-total"></td>
                    <td className="td-total">
                      <small></small>
                    </td>
                  </tr>
                  <tr className="tr-actions">
                    <td colSpan="2" />
                    <td className="text-right" colSpan="2">
                      <a href="https://google.com" target="_blank">
                        <Button color="danger" size="lg" type="button">
                          Next Step <i className="fa fa-chevron-right" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionTables;
