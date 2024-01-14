import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader({studentData}) {
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
      <div
        className="clear-filter page-header-smallest profile-header"
        filter-color="navBlue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
          ref={pageHeader}
        />
        <Container className="profile-page-header">
          <div className='profile-page-header__banner'>
            <img src={require('assets/img/graphic-btns/website-banner.png')} role="presentation" />
          </div>

          <div className='profile-page-header__header-stuff-container'>
            <div>
              {
                studentData.img && (
                  <div className="photo-container">
                    <img alt="..." src={require(`../../assets/img/headshots/${studentData.img}`)} />
                  </div>
                )
              }
            </div>
            <div className="profile-page-header__buttons-container">
              <a href={studentData?.bioLink} className="profile-page-header__buttons-container--btn">
                <img src={require('assets/img/graphic-btns/1.png')} role="presentation" />
              </a>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLScrWcNJX1AWJnYljnQmvToAK9SPmA66_7uHT1AcI83ZWsvUgw/viewform?usp=sf_link' className="profile-page-header__buttons-container--btn">
                <img src={require('assets/img/graphic-btns/2.png')} role="presentation" />
              </a>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdnNrK8YfA8899v2mEWHkSRZlYfkYxhlIGwp9MwA2JJOoaTbQ/viewform?usp=sf_link' className="profile-page-header__buttons-container--btn">
                <img src={require('assets/img/graphic-btns/3.png')} role="presentation" />
              </a>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeM8WDNhYFOycA3R-PA-l3DEDzXBnTjRHVDrqMTmRkaHCUUOg/viewform?usp=sf_link' className="profile-page-header__buttons-container--btn">
                <img src={require('assets/img/graphic-btns/4.png')} role="presentation" />
              </a>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSct50R4JeRJKerCUUl1RnJ6I2fXBGWt5tb4QMNz5s2iVD5FUQ/viewform?usp=sf_link' className="profile-page-header__buttons-container--btn">
                <img src={require('assets/img/graphic-btns/5.png')} role="presentation" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
