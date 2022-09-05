import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionDescriptionAreas() {
  const [hTabs, setHTabs] = React.useState("1");
  const [vTabs, setVTabs] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <Container className="tim-container">
        <div id="description-areas">
          <div className="title">
            <br></br>
            <h1>What I do:</h1>
          </div>
          <Row>
            <Col md="5" sm="12">
              <h2>Product</h2>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={hTabs === "1" ? "active" : ""}
                        onClick={() => {
                          setHTabs("1");
                        }}
                      >
                        Management
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={hTabs === "2" ? "active" : ""}
                        onClick={() => {
                          setHTabs("2");
                        }}
                      >
                        Development
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={hTabs === "3" ? "active" : ""}
                        onClick={() => {
                          setHTabs("3");
                        }}
                      >
                        Design
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent className="text-center" activeTab={"hTabs" + hTabs}>
                <TabPane tabId="hTabs1">
                  <p>
                    15+ Years in Product Management roles from a Global
                    Fortune-100 to multiple startups, in telecom, digital media
                    and video.
                  </p>
                </TabPane>
                <TabPane tabId="hTabs2">
                  <p>
                    While most of my career was strategic and planning in
                    nature, I know how to code and more importantly how to
                    problem solve. I communicate with engineers well and know
                    how to get products shipped.
                  </p>
                </TabPane>
                <TabPane tabId="hTabs3">
                  <p>
                    I approach design from all sides. I code from a figma sketch
                    or build a discreet analog audio device. I happily engage
                    with every single team to coalesce ang gel into serious deep
                    design thinking. I can't solve bad design, but I can spot it
                    and rectify it fast.
                  </p>
                </TabPane>
              </TabContent>
            </Col>
            <Col md="7" sm="12">
              <h2> Strategy</h2>
              <Row>
                <Col md="4" sm="4" xs="6">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav
                        className="flex-column nav-stacked"
                        role="tablist"
                        tabs
                      >
                        {/* REMINDER TO FIGURE OUT THESE 1-5 "SetVTabs" bullshit */}
                        <NavItem>
                          <NavLink
                            className={vTabs === "1" ? "active" : ""}
                            onClick={() => {
                              setVTabs("1");
                            }}
                          >
                            Product
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            Software
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "3" ? "active" : ""}
                            onClick={() => {
                              setVTabs("3");
                            }}
                          >
                            Hardware
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "4" ? "active" : ""}
                            onClick={() => {
                              setVTabs("4");
                            }}
                          >
                            UX
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="8" sm="8" xs="6">
                  {/* Tab panes */}
                  <TabContent activeTab={"vTabs" + vTabs}>
                    <TabPane tabId="vTabs1">
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                      <p>
                        It’s one continuous form where hardware and software
                        function in perfect unison, creating a new generation of
                        phone that's better by any measure.
                      </p>
                    </TabPane>
                    <TabPane tabId="vTabs2">
                      <p>
                        The first thing you notice when you hold the phone is
                        how great it feels in your hand. The cover glass curves
                        down around the sides to meet the anodized aluminum
                        enclosure in a remarkable, simplified design.
                      </p>
                      <p>
                        There are no distinct edges. No gaps. Just a smooth,
                        seamless bond of metal and glass that feels like one
                        continuous surface.
                      </p>
                    </TabPane>
                    <TabPane tabId="vTabs3">
                      <p>
                        It’s one continuous form where hardware and software
                        function in perfect unison, creating a new generation of
                        phone that's better by any measure.
                      </p>
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* info areas */}
        <div id="info-areas">
          <div className="title">
            <br></br>
            <h1>What I do for you:</h1>
            <h3>Save you money...</h3>
          </div>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon">
                  <i className="nc-icon nc-time-alarm" />
                </div>
                <div className="description">
                  <h4 className="info-title">Save You Time</h4>
                  <p>
                    Not just save you, yourself, but everyone who works for you.
                    I don't look for inefficiency among staff in productivity, I
                    readily spot it in process gaps and collective-time wasters
                    and delight everyone by streamlining bores and cutting down
                    meetings.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon">
                  <i className="nc-icon nc-delivery-fast" />
                </div>
                <div className="description">
                  <h4 className="info-title">Ship Faster</h4>
                  <p>
                    Everyone wants to ship on time if not sooner and have a tidy
                    backlog and keep up to date with FRs and other tech debt. I
                    have employed multiple strategies at different times with
                    great success to make both development and product happier.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon">
                  <i className="nc-icon nc-palette" />
                </div>
                <div className="description">
                  <h4 className="info-title">Create Harmony</h4>
                  <p>
                    Harmony is much different than Synergy. Synergy is when no
                    one is enjoying doing anything with anyone but the
                    consulting fee is high. Harmoney occurs when one consultant
                    knows how to talk to multiple departments across the
                    company.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <h3>While making you more</h3>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Leveraging Strength</h4>
                  <p>
                    Once I know what you're sweet spot is that you haven't been
                    able to find, I quickly focus all efforts to move the ship
                    in that direction, regardless of how large. And I mean the
                    whole ship. I get collective buy-in that results in
                    dramatically higher effort toward increasing profit.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-warning">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Eyes on Ideas</h4>
                  <p>
                    I have witnessed most of the product lifecycle of both video
                    conferencing and multimedia up to now, I have also been
                    involved in incredibly advanced technology at the startup
                    level. I am confident i can say what has a chance and what
                    doesn't as we approach 2030.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Meticulous Financials</h4>
                  <p>
                    If you want to use NPS as your primary metric, do NOT
                    contact me. I will watch your free cash flow like a hawk,
                    and would gladly cut or even return my fee if I am not
                    performing up to what can be accurately measured down to the
                    penny.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SectionDescriptionAreas;
