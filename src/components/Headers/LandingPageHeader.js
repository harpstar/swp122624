import React from "react";

// reactstrap components
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  return (
    <>
      <div className="page-header page-header-large">
        <div className="home-page__header-image-container">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/DigitalGroup.jpg") + ")",
              width: "100%",
            }}
            filter-color="black"
            ref={pageHeader}
          />
        </div>
        <div className="content-center home-page__header-text-container">
          <h1 className="title">Sustainable Career Pathways</h1>
          <h3>
            <strong>Sustainable Career Pathways</strong> is a portal for
            students to explore meaningful good-paying careers, while helping to
            rebuild our planet.
          </h3>
          <h3>
            <strong>SustainWDN™</strong> is an online ecosystem that builds
            bridges between young people, educators, and blue and green
            companies to build a 21st century blue/green workforce development
            pipeline.
          </h3>
          <Button
            style={{ fontSize: "1.5rem" }}
            // className="btn-neutral"
            color="info"
            to="/pathways"
            size="lg"
            tag={Link}
          >
            Browse Pathways!
          </Button>
        </div>
        <div className="home-page__logo-container">
          <img
            src={require("assets/img/sustain-logo.png")}
            alt="logo"
            className="home-page__logo-container--logo"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
