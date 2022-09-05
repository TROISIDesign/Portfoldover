import React from "react";

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/cover.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="text-center">MICHAEL TROiSi</h1>
            <h2 className="text-center">Design | Build | Manage </h2>
            <h3 className="red-product">Service as a Product</h3>
            <h4 className="text-center">
              <small>I help you make $$.</small>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
