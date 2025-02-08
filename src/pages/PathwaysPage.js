import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const PathwaysPage = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPaused, setIsPaused] = useState(false); // Track whether video is paused

  const stopBeforeEnd = () => {
    const video = videoRef.current;
    if (video) {
      const videoDuration = video.duration;
      const stopAtTime = videoDuration - 1; // 1 seconds before the end
      if (!isPaused && video.currentTime >= stopAtTime) {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", stopBeforeEnd);
    }
    return () => {
      // Clean up the event listener when the component unmounts
      if (video) {
        video.removeEventListener("timeupdate", stopBeforeEnd);
      }
    };
  }, [isPaused]);

  return (
    <>
      <Container fluid className="py-0">
        <Row className="mb-0">
          <Col>
            <div className="position-relative">
              {/* Rainbow Arc Animation */}
              <Container fluid className="text-center">
                <Row>
                  <div className="video-container d-flex justify-content-center img-fluid w-100">
                    <video
                      ref={videoRef} // Attach reference to video
                      src={require("assets/img/Animation.mp4")}
                      autoPlay
                      muted
                      playsInline
                      className="animated-logo-video"
                      onended={stopBeforeEnd}
                    />
                  </div>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        {/* Pathways Section */}
        <Row className="align-items-center justify-content-center">
          {/* Green Economy */}
          <Col md={3}>
            <h2
              className="text-success text-center mb-4"
              style={{ fontSize: "1.8rem", fontWeight: "bold" }}
            >
              Green Economy Pathways
            </h2>
            <Card>
              <CardBody>
                <ListGroup className="text-success" flush>
                  <ListGroupItem
                    className="text-success button-text card-text"
                    action
                    href="/pathway/environmental-engineering"
                    tag="a"
                  >
                    Environmental Engineering
                  </ListGroupItem>

                  <ListGroupItem
                    className="text-success button-text card-text"
                    action
                    href="/pathway/green-building"
                    tag="a"
                  >
                    Green Building
                  </ListGroupItem>

                  <ListGroupItem
                    className="text-success button-text card-text"
                    action
                    // href="/pathway/"
                    tag="a"
                  >
                    Renewable Agriculture
                  </ListGroupItem>

                  <ListGroupItem
                    className="text-success button-text card-text"
                    action
                    // href="/pathway/"
                    tag="a"
                  >
                    Renewable Energy
                  </ListGroupItem>
                  <ListGroupItem
                    className="text-success button-text card-text"
                    action
                    // href="/pathway/"
                    tag="a"
                  >
                    Solar
                  </ListGroupItem>
                  <ListGroupItem
                    className="text-success button-text card-text"
                    action
                    href="https://sustainwdn.com/wp-content/uploads/2023/05/sustainable-career-pathways-green-entrepeneurs.pdf"
                    tag="a"
                  >
                    Other Pathways
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>

          {/* Center Explore Section with Arrows */}
          <Col md={5} className="text-center d-flex align-items-center">
            {/* Left Arrow */}
            <div
              className="d-flex align-items-center flex-grow-1"
              style={{ marginRight: "1rem" }}
            >
              <div className="arrow-left"></div>
              <div
                className="bg-warning flex-grow-1"
                style={{ height: "4px" }}
              ></div>
            </div>

            {/* Button */}
            <Button
              color="warning"
              className="rounded-pill px-4 py-2 fs-4 button-text card-text"
              href="https://sustainwdn.com/user/demo/"
            >
              Explore Your Pathway
            </Button>

            {/* Right Arrow */}
            <div
              className="d-flex align-items-center flex-grow-1"
              style={{ marginLeft: "1rem" }}
            >
              <div
                className="bg-warning flex-grow-1"
                style={{ height: "4px" }}
              ></div>
              <div className="arrow-right"></div>
            </div>
          </Col>

          {/* Blue Economy */}
          <Col md={3}>
            <h2
              className="text-primary text-center mb-4"
              style={{ fontSize: "1.8rem", fontWeight: "bold" }}
            >
              Blue Economy Pathways
            </h2>
            <Card>
              <CardBody>
                <ListGroup className="text-primary" flush>
                  <ListGroupItem
                    className="text-primary button-text card-text"
                    action
                    href="/pathway/aquaculture"
                    tag="a"
                  >
                    Aquaculture
                  </ListGroupItem>

                  <ListGroupItem
                    className="text-primary button-text card-text"
                    action
                    // href="/pathway/"
                    tag="a"
                  >
                    Blue Finance
                  </ListGroupItem>

                  <ListGroupItem
                    className="text-primary button-text card-text"
                    action
                    // href="/pathway/"
                    tag="a"
                  >
                    Blue Tech
                  </ListGroupItem>

                  <ListGroupItem
                    className="text-primary button-text card-text"
                    action
                    href="/pathway/clean-water"
                    tag="a"
                  >
                    Clean Water Management
                  </ListGroupItem>
                  <ListGroupItem
                    className="text-primary button-text card-text"
                    action
                    href="/pathway/marine-biology"
                    tag="a"
                  >
                    Marine Biology
                  </ListGroupItem>
                  <ListGroupItem
                    className="text-primary button-text card-text"
                    action
                    // href="/pathway/"
                    tag="a"
                  >
                    Offshore Wind
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PathwaysPage;
