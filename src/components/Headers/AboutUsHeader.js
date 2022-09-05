import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/sections/gerrit-vermeulen.jpg").default +
            ")",
        }}
      >
        <div className="filter filter-info" />
        <div className="content-center">
          <Container>
            <h1>
              Hello, <br />
              We are TROiSi Design.
            </h1>
            <h3>
              While we often speak in the third person, this is just my resume
              along with some additional highlights of a crazy career.
            </h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
