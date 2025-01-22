import React from 'react';
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import {Card, CardBody, Button, Row, Col, Container} from "reactstrap";
const PathwaysPage = () => {
  return (
    <>
      <ExamplesNavbar coloredNav />
      <Container className="py-5">
                    <Row className="mb-4">
                        <Col>
                            <div className="position-relative">
                                {/* Rainbow Arc */}
                                <img
                                    src={require("assets/img/sustain-logo.png")} 
                                    alt="" 
                                    className="img-fluid w-100" 
                                ></img>

                                {/* Stars */}
                                <div className="position-absolute top-50 start-50 translate-middle d-flex gap-3">
                                    <i className="text-warning fs-2">★</i>
                                    <i className="text-warning fs-2">★</i>
                                    <i className="text-warning fs-2">★</i>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Main Title */}
                    <Row className="text-center mb-4">
                        <Col>
                            <h1 className="text-primary fw-bold">SustainWDN™</h1>
                            <p className="text-secondary fs-4">Sustainable Workforce Development Network</p>
                        </Col>
                    </Row>

                    {/* Pathways Section */}
                    <Row className="align-items-center">
                        {/* Green Economy */}
                        <Col md={4}>
                            <h2 className="text-success italic-text mb-3">Green Economy Pathways</h2>
                            <Card className="border-success">
                                <CardBody>
                                    <ul className="text-success list-unstyled fs-5">
                                        <li>Environmental Engineering</li>
                                        <li>Green Building</li>
                                        <li>Renewable Agriculture</li>
                                        <li>Renewable Energy</li>
                                        <li>Solar</li>
                                        <li>Other Pathways</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>


          {/* Center Explore Section with Arrows */}
          <Col md={4} className="text-center d-flex align-items-center">
              {/* Left Arrow */}
              <div className="d-flex align-items-center flex-grow-1" style={{ marginRight: '1rem' }}>
                  <div className="arrow-left"></div>
                  <div className="bg-warning flex-grow-1" style={{ height: '4px' }}></div>
              </div>

              {/* Button */}
              <Button color="warning" className="rounded-pill px-4 py-2 fs-4">
                  Explore Your Pathway
              </Button>

              {/* Right Arrow */}
              <div className="d-flex align-items-center flex-grow-1" style={{ marginLeft: '1rem' }}>
                  <div className="bg-warning flex-grow-1" style={{ height: '4px' }}></div>
                  <div className="arrow-right"></div>
              </div>
          </Col>


                        {/* Blue Economy */}
                        <Col md={4}>
                            <h2 className="text-primary italic-text mb-3">Blue Economy Pathways</h2>
                            <Card className="border-primary">
                                <CardBody>
                                    <ul className="text-primary list-unstyled fs-5">
                                        <li>Aquaculture</li>
                                        <li>Blue Finance</li>
                                        <li>Blue Tech</li>
                                        <li>Clean Water Management</li>
                                        <li>Marine Biology</li>
                                        <li>Offshore Wind</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
    </>
  );
}

export default PathwaysPage;
