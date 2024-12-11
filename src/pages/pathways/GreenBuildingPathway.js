import React from 'react';
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip, Card, CardBody,
  Collapse
} from "reactstrap";

const GreenBuildingPathway = () => {
  const [isBuildingMaintenanceWorkerOpen, setIsBuildingMaintenanceWorkerOpen] = React.useState(true);
  const [isBuildingMaintenanceTechnicianOpen, setIsBuildingMaintenanceTechnicianOpen] = React.useState(true);
  const [isBuildingOperatorOpen, setIsBuildingOperatorOpen] = React.useState(true);
  const [isFacilitiesManagerOpen, setIsFacilitiesManagerOpen] = React.useState(true);
  const [isBuildingEngineerOpen, setIsBuildingEngineerOpen] = React.useState(true);
  return (
    <>
      <ExamplesNavbar coloredNav/>
      <h2 className='pathway-page__main-title'>Sustainable Career Pathway - Green Building</h2>

      <div className='pathway-page__images-container'>
        <Col className="ml-auto mr-auto" md="10">
          <Row className="collections justify-content-center pathway-page__images-row">
              <img
                alt="..."
                className="img-raised pathway-page__image"
                src={require("assets/img/pathways/green-building/1.jpeg")}
              ></img>
              <img
                alt="..."
                className="img-raised pathway-page__image"
                src={require("assets/img/pathways/green-building/2.jpeg")}
              ></img>
          </Row>
        </Col>
      </div>

      <main className="pathway-page__levels-container">
        {/* ENTRY LEVEL */}
        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--entry">
            Entry Level
          </h3>

          {/* 1 */}
          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceWorkerOpen(prev => !prev)}>Building
            Maintenance Worker</h4>

          <Collapse isOpen={isBuildingMaintenanceWorkerOpen}>
            <p>Perform general and preventative maintenance work on buildings to keep all systems in good standing.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Handles variety of repairs that do not require a specialized technician and conduct regular
                inspections
              </li>
              <li>Conduct inventory of stock materials and supplies</li>
              <li>Involved in researching new, high performance building systems as they gain experience/specialize</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or Equivalent</li>
              <li>Vocational Training in carpentry/building</li>
              <li><a href="https://catalog.bristolcc.edu/sites/default/files/pdf/degree/green-building-technology-certificate.pdf?1664570064">Green
                Building Technology Certificate</a></li>
              <li><a href="https://www.usgbccc.org/page-18157">US Green Building Council Certifications</a></li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>0-1 year required</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$28,000 - $40,000</li>
            </ul>
          </Collapse>

          <hr/>

          {/* 2 */}

          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceTechnicianOpen(prev => !prev)}>Building
            Maintenance Technician</h4>

          <Collapse isOpen={isBuildingMaintenanceTechnicianOpen}>
            <p>Perform routine and emergency maintenance tasks, using a wide range of skills and knowledge in carpentry,
              heating, ventilation, electrical systems and air conditioning (HVAC).</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Complete a variety of maintenance and repair jobs on the premise</li>
              <li>Order and manage supplies within the budget presented</li>
              <li>Keep maintenance scheduled and records for material safety data sheets</li>
              <li>Interpret diagrams, drawings and equipment manuals to assist with project completion</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or Equivalent</li>
              <li>Construction skills – OTJ training offered</li>
              <li><a href="https://catalog.bristolcc.edu/engineering/green-building-technology-certificate">Green
                Building Technology Certificate</a></li>
              <li><a href="https://www.usgbccc.org/page-18157">US Green Building Council Certifications</a></li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>1-3 years in related fields</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$34,000 - $61,000</li>
            </ul>
          </Collapse>
        </div>


        {/* MID LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--mid">
            Mid-Level
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsBuildingOperatorOpen(prev => !prev)}>Building Operator</h4>

          <Collapse isOpen={isBuildingOperatorOpen}>
            <p>Ensure that a building’s heating, cooling, mechanical and electrical equipment is running
              effectively.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Inspect buildings for safety hazards and regulation violations</li>
              <li>Check that the facility is able to operate successfully and efficiently while managing repairs and
                improved maintenance
              </li>
              <li>Oversee technicians and maintenance workers who are scheduled to make repairs</li>
              <li>Weekly check-ins that the building is up to code and that all regular maintenance has been properly
                handled
              </li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or Equivalent</li>
              <li>Two-year or four-year degree in building automation systems or related field</li>
              <li><a href="https://catalog.bristolcc.edu/engineering/green-building-technology-certificate">Green
                Building Technology Certificate</a></li>
              <li><a href="https://www.usgbccc.org/page-18157">US Green Building Council Certifications</a></li>
            </ul>

            <h4>Recognized Certifications::</h4>
            <ul>
              <li>BOC – Building Operator Certification</li>
              <li>HVAC Excellence</li>
              <li>OSHA-10 or OSHA 30</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>3-5 years</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$40,000 - $110,000</li>
            </ul>
          </Collapse>
        </div>


        {/* Advanced LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--advanced">
            Advanced
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsFacilitiesManagerOpen(prev => !prev)}>Facilities Manager</h4>

          <Collapse isOpen={isFacilitiesManagerOpen}>
            <p>Provide overall direction, coordination and supervision to all projects related to the operations and
              maintenance of building systems.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Ensure that the physical infrastructure of the business is well maintained and operating properly,
                while identifying areas for greater efficiency and cost savings
              </li>
              <li>Oversee the upkeep of equipment and supplies, determining timeline for scheduled repairs or renovation
                projects and coordinating all building safety inspections.
              </li>
              <li>Manage budget while coordinating and negotiating with outside vendors for supplies, repairs,
                renovations and special projects.
              </li>
              <li>Supervise staff: setting work schedules, provide training and oversee the work of all team
                individuals.
              </li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or Equivalent</li>
              <li>Two-year or Four-year degree in engineering, business management or facilities management</li>
              <li><a href="https://catalog.bristolcc.edu/engineering/green-building-technology-certificate">Green
                Building Technology Certificate</a></li>
              <li><a href="https://www.usgbccc.org/page-18157">US Green Building Council Certifications</a></li>
            </ul>

            <h4>Recognized Certifications::</h4>
            <ul>
              <li>FMP – Facilities Management Professional</li>
              <li>CFM – Certified Facility Manager</li>
              <li>CGPM - LEED AP, Green Property Management</li>
              <li>CMM - Certified Maintenance Manager</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>3-5 years</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$60,000 - $175,000</li>
              <li>Dependent on experience and building size</li>
            </ul>
          </Collapse>

          <hr/>

          {/* 2 */}

          <h4 onClick={() => setIsBuildingEngineerOpen(prev => !prev)}>Building Engineer</h4>

          <Collapse isOpen={isBuildingEngineerOpen}>
            <p>Responsible for overseeing all building maintenance and preventative maintenance schedules in larger
              buildings and they directly supervise building maintenance employees.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Work with Building managers to identify the physical needs and maintenance of the buildings that they
                operate
              </li>
              <li>Maintain all physical aspects of a building from the structure to heating and cooling equipment to
                electrical systems to make sure that everything is designed properly and running efficiently
              </li>
              <li>Review plans from Chief Engineer and Senior Operations Manager to implement designs and structural
                changes
              </li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>BOC – Building Operator Certification</li>
              <li>CCE – Certified Chief Engineer</li>
              <li>Universal CFC Certification</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>3-5 years</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$50,000 - $110,000</li>
            </ul>
          </Collapse>
        </div>
      </main>
    </>
  );
}

export default GreenBuildingPathway;
