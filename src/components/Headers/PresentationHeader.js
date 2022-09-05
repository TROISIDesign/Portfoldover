/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/pk-pro-cover.jpg").default +
              ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h2 className="presentation-title">
                  TROISI <h4>DESIGN</h4>
                  <br></br> <small>web & mobile dev</small>
                </h2>
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
                We specialize in multiple areas. Most involve making money.
                Music does not.
              </h2>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
