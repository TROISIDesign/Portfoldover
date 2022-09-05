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
                  <br></br> <small>Product Consulting</small>
                </h2>
                {/* <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div> */}
                {/* <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div> */}
              </div>
              <h2 className="presentation-subtitle text-center">
                Working in multiple areas - with expertise in product
                management, UX, design and development - we offer a unique
                perspective from a consultancy.
                <br></br>
                <br></br>
                <button>Learn More</button>
              </h2>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
