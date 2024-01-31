import React from 'react';
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import {Col, Collapse, Row} from "reactstrap";

const MarineBiologyPathway = () => {
  const [isBuildingMaintenanceWorkerOpen, setIsBuildingMaintenanceWorkerOpen] = React.useState(true);
  const [isBuildingOperatorOpen, setIsBuildingOperatorOpen] = React.useState(true);
  const [isFacilitiesManagerOpen, setIsFacilitiesManagerOpen] = React.useState(true);
  const [isBuildingEngineerOpen, setIsBuildingEngineerOpen] = React.useState(true);
  return (
    <>
      <ExamplesNavbar coloredNav/>
      <h2 className='pathway-page__main-title'>Sustainable Career Pathway - Marine Biology</h2>

      <div className='pathway-page__images-container'>
        <Col className="ml-auto mr-auto" md="10">
          <Row className="collections justify-content-center pathway-page__images-row">
              <img
                alt="..."
                className="img-raised pathway-page__image"
                src={require("assets/img/pathways/marine-biology/3.jpeg")}
              ></img>
              <img
                alt="..."
                className="img-raised pathway-page__image"
                src={require("assets/img/pathways/marine-biology/2.jpg")}
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
          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceWorkerOpen(prev => !prev)}>Lab
            Assistant</h4>

          <Collapse isOpen={isBuildingMaintenanceWorkerOpen}>
            <p>Apply engineering theory and principals to assist professional engineers with support, diagnostics, and
              maintenance throughout a project within Clean Energy</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Under supervision, perform standard repetitive technical laboratory duties such as DNA extraction and
                PCR tests
              </li>
              <li>Maintain laboratory culture copepods</li>
              <li>Perform general lab maintenance and lab safety protocols</li>
              <li>Occasional training of undergraduate students and volunteers as needed</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma</li>
              <li>Two-years of laboratory experience or two years of college courses in natural sciences</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>Some level of experience in marine biology or genetics</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$43,159 - $50,738</li>
            </ul>
          </Collapse>
        </div>


        {/* MID LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--mid">
            Mid-Level
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsBuildingOperatorOpen(prev => !prev)}>Marine Biologist (Protected Species)</h4>

          <Collapse isOpen={isBuildingOperatorOpen}>
            <p>Serve as the marine protected species subject matter expert for impact assessment, permitting and
              monitoring related to offshore wind projects.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Support marine resource projects for a combination of commercial, federal and state clients</li>
              <li>Perform data analysis, impact assessment and report writing</li>
              <li>Integrate underwater acoustic modeling results in permit application and reports</li>
              <li>Develop permits for various types of offshore activity</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Bachelor’s Degree or equivalent level of experience</li>
              <li>Experience in developing documents for agency consultation under the Marine Mammal Protection Act</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>1-3 years of experience as SME (Subject Matter Expert)</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$75,000 – 95,000</li>
            </ul>
          </Collapse>
        </div>


        {/* Advanced LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--advanced">
            Advanced
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsFacilitiesManagerOpen(prev => !prev)}>Senior Marine Mammal Scientist</h4>

          <Collapse isOpen={isFacilitiesManagerOpen}>
            <p>Serve as lead marine mammal expert and assist in the integration of projects that could include offshore
              renewables, coastal resilience, oil and gas, ports and shipping and marine science research projects.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Conducting and planning field work, data analysis and review of projects</li>
              <li>Work on proposal writing and reviewing, preparing and delivering presentations to partners for
                business development
              </li>
              <li>Manage reports relating to:
                <ul>
                  <li>Assessment of underwater noise</li>
                  <li>Vessel Strike risk</li>
                  <li>Aerial or vessel-based distance sampling</li>
                </ul>
              </li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Master’s Degree Required (M.Sc minimum)</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>5+ Years of Experience</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$75,200 – $112,900</li>
              <li>Senior Positions – Bonus eligible</li>
            </ul>
          </Collapse>

          <hr/>

          {/* 2 */}

          <h4 onClick={() => setIsBuildingEngineerOpen(prev => !prev)}>Marine Biology – Director of Science</h4>

          <Collapse isOpen={isBuildingEngineerOpen}>
            <p>Provide strategic oversight and manage the expansion and diversification of research programs.</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>
                Develop and improve research projects related to the MBA science pillars
                <ul>
                  <li>Marine Microbiome</li>
                  <li>Coastal Ecology</li>
                  <li>Ocean Biology</li>
                </ul>
              </li>
              <li>Work on proposal writing and reviewing, preparing and delivering presentations to partners for
                business development
              </li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>PhD Required</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>5-7+ Years of Experience Minimum</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$180,000 – $250,000</li>
            </ul>
          </Collapse>
        </div>
      </main>
    </>
  );
}

export default MarineBiologyPathway;
