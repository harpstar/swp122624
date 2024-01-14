import React from 'react';
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import {Col, Collapse, Row} from "reactstrap";

const EnvironmentalEngineeringPathway = () => {
  const [isBuildingMaintenanceWorkerOpen, setIsBuildingMaintenanceWorkerOpen] = React.useState(false);
  const [isBuildingMaintenanceTechnicianOpen, setIsBuildingMaintenanceTechnicianOpen] = React.useState(false);
  const [isBuildingOperatorOpen, setIsBuildingOperatorOpen] = React.useState(false);
  const [isFacilitiesManagerOpen, setIsFacilitiesManagerOpen] = React.useState(false);
  const [isBuildingEngineerOpen, setIsBuildingEngineerOpen] = React.useState(false);
  return (
    <>
      <ExamplesNavbar coloredNav />
      <h2 className='pathway-page__main-title'>Sustainable Career Pathway - Environmental Engineering</h2>

      <main className="pathway-page__levels-container">
        {/* ENTRY LEVEL */}
        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--entry">
            Entry Level
          </h3>

          {/* 1 */}
          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceWorkerOpen(prev => !prev)}>Engineering Technician</h4>

          <Collapse isOpen={isBuildingMaintenanceWorkerOpen}>
            <p>Apply engineering theory and principals to assist professional engineers with support, diagnostics, and maintenance throughout a project within Clean Energy.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Assemble electrical systems or prototypes</li>
              <li>Build, maintain, calibrate, trouble shoot or repair testing equipment</li>
              <li>Perform tests and collect data</li>
              <li>Interpret engineering data or schematics and report to management or head engineer</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Associate degree</li>
              <li>Company approved certification</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>0-2 years working as an Engineering Tech or related field</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$48,640 - $65,000</li>
            </ul>
          </Collapse>

          <hr/>

          {/* 2 */}

          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceTechnicianOpen(prev => !prev)}>Entry-Level Engineer <div>(Industrial Health &amp; Safety)</div></h4>

          <Collapse isOpen={isBuildingMaintenanceTechnicianOpen}>
            <p>Plan, implement, and coordinate safety programs, requiring application of engineering principles and technology, to prevent or correct unsafe environmental working conditions.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Inspect facilities, machinery, and safety equipment to identify potential hazards and ensure safety regulation compliance</li>
              <li>Conduct worker training in with respect to safety laws and regulations, hazardous condition monitoring, and use of safety equipment</li>
              <li>Maintain knowledge of current policies, regulations, and industrial processes</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Bachelor’s Degree</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>1-2 years working within health and safety engineering</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$89,410 - $100,000</li>
            </ul>
          </Collapse>
        </div>



        {/* MID LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--mid">
            Mid-Level
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsBuildingOperatorOpen(prev => !prev)}>Engineering Manager</h4>

          <Collapse isOpen={isBuildingOperatorOpen}>
            <p>Responsible for overseeing, managing, planning, directing, and coordinating activities and projects for several engineering project management teams. They are involved in managing clean energy product design, development, production, and testing.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Manage the coordination and overall integration of technical activities in engineering projects</li>
              <li>Consult or negotiate with clients to finalize project specifications</li>
              <li>Work with management and marketing staff to discuss project specifications and procedures</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Master’s Degree Required</li>
              <li>Equivalent level of experience</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>3-5 years minimum</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$144,830</li>
            </ul>
          </Collapse>
        </div>


        {/* Advanced LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--advanced">
            Advanced
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsFacilitiesManagerOpen(prev => !prev)}>Engineering Director</h4>

          <Collapse isOpen={isFacilitiesManagerOpen}>
            <p>Head of the engineering department who is responsible for overseeing, planning and directing all engineering managers in addition to the entire department.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Manage the coordination and overall integration of technical activities in engineering projects</li>
              <li>Consult or negotiate with clients to finalize project specifications</li>
              <li>Present and explain proposals, reports or findings to client</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Master’s Degree Required</li>
              <li>Equivalent level of experience</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>5+ Years of Experience</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$145,000</li>
              <li>Director-level Benefits package (401K, Bonus, etc.)</li>
            </ul>

            <h4>Certificates/Alternative Education:</h4>
            <ul>
              <li><a href="https://www.bpelsg.ca.gov/applicants/eit_lsitapp.shtml">Engineer in Training Certification</a></li>
            </ul>
          </Collapse>
        </div>
      </main>

      <div className='pathway-page__images-container'>
        <Col className="ml-auto mr-auto" md="10">
          <Row className="collections">
            <Col md="12">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/pathways/environmental-engineering/2.jpg")}
                style={{ maxWidth: '50%' }}
              ></img>
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/pathways/environmental-engineering/4.jpeg")}
                style={{ maxWidth: '50%' }}
              ></img>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
}

export default EnvironmentalEngineeringPathway;
