import React from "react";

// reactstrap components
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div className="home-page__header-image-container">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/home-page/home1.jpg") + ")",
              width: '50%'
            }}
            filter-color="black"
            ref={pageHeader}
          />
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/home-page/home2.jpg") + ")",
              width: '50%',
              right: 0,
            }}
            filter-color="black"
            ref={pageHeader}
          />
        </div>
        <div className="content-center home-page__header-text-container">
          <h1 className="title">Sustainable Career Pathways</h1>
          <h3>
            <strong>Sustainable Career Pathways</strong> is a portal for students to explore meaningful good-paying careers, while helping to rebuild our planet.
          </h3>
          <h3>
            <strong>SustainWDN™</strong> is an online ecosystem that builds bridges between young people, educators, and blue and green companies to build a 21st century blue/green workforce development pipeline.
          </h3>
          <Button
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
          <img src={require('assets/img/sustain-logo.png')} alt="logo" className="home-page__logo-container--logo" />
        </div>
      </div>
      <div className="pathways-page__carousel-container">
        <Carousel />
      </div>
    </>
  );
}

export default LandingPageHeader;
