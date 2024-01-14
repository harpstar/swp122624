import React from 'react';
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import {Col, Collapse, Row} from "reactstrap";

const CleanWaterPathway = () => {
  const [isBuildingMaintenanceWorkerOpen, setIsBuildingMaintenanceWorkerOpen] = React.useState(false);
  const [isBuildingMaintenanceTechnicianOpen, setIsBuildingMaintenanceTechnicianOpen] = React.useState(false);
  const [isBuildingOperatorOpen, setIsBuildingOperatorOpen] = React.useState(false);
  const [isFacilitiesManagerOpen, setIsFacilitiesManagerOpen] = React.useState(false);
  const [isBuildingEngineerOpen, setIsBuildingEngineerOpen] = React.useState(false);
  return (
    <>
      <ExamplesNavbar coloredNav />
      <h2 className='pathway-page__main-title'>Sustainable Career Pathway - Clean Water</h2>

      <main className="pathway-page__levels-container">
        {/* ENTRY LEVEL */}
        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--entry">
            Entry Level
          </h3>

          {/* 1 */}
          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceWorkerOpen(prev => !prev)}>Wastewater Operator I</h4>

          <Collapse isOpen={isBuildingMaintenanceWorkerOpen}>
            <p>Operates and maintains wastewater treatment, sludge processing, and handling equipment. Tends pumps, conveyors, blowers, chlorinators, vacuum filters, and other equipment used to treat wastewater. Collects samples and makes routine chemical analyses of wastewater at various points in the plant process.</p>

            {/*<h4>Tasks/Responsibilities:</h4>*/}
            {/*<ul>*/}
            {/*  <li>Under supervision, perform standard repetitive technical laboratory duties such as DNA extraction and PCR tests</li>*/}
            {/*  <li>Maintain laboratory culture copepods</li>*/}
            {/*  <li>Perform general lab maintenance and lab safety protocols</li>*/}
            {/*  <li>Occasional training of undergraduate students and volunteers as needed</li>*/}
            {/*</ul>*/}

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or Equivalent</li>
              <li>Completion of two water or sewage treatment education courses at the community college level is required</li>
              <li>Associate Degree is desirable</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>One year of experience in the operation of wastewater treatment plant, incorporating biological pond treatment, preliminary and primary treatment, Biological Nutrient Removal (BNR) activated sludge treatment, tertiary treatment and biosolids handling facilities is preferred</li>
            </ul>

            <h4>Licenses:</h4>
            <ul>
              <li>Ability to obtain a valid Wastewater (WW) Operator-in-Training (OIT) Certification within 30 days of employment and ability to obtain Grade I Wastewater Treatment Plant Operator Certificate within 18 months of employment is required</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$30.97 - $43.60/Hour</li>
            </ul>
          </Collapse>
        </div>



        {/* MID LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--mid">
            Mid-Level
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsBuildingOperatorOpen(prev => !prev)}>Wastewater Operator II</h4>

          <Collapse isOpen={isBuildingOperatorOpen}>
            <p>Operates and maintains wastewater treatment, sludge processing, and handling equipment. Tends pumps, conveyors, blowers, chlorinators, vacuum filters, and other equipment used to treat wastewater. Collects samples and makes routine chemical analyses of wastewater at various points in the plant process.</p>

            {/*<h4>Tasks/Responsibilities:</h4>*/}
            {/*<ul>*/}
            {/*  <li>Support marine resource projects for a combination of commercial, federal and state clients</li>*/}
            {/*  <li>Perform data analysis, impact assessment and report writing</li>*/}
            {/*  <li>Integrate underwater acoustic modeling results in permit application and reports</li>*/}
            {/*  <li>Develop permits for various types of offshore activity</li>*/}
            {/*</ul>*/}

            <h4>Education:</h4>
            <ul>
              <li>High school graduation or equivalent required</li>
              <li>Experience in developing documents for agency consultation under the Marine Mammal Protection Act</li>
              <li>Completion of fifteen college level units relating to water/sewage treatment or environmental studies, and/or Water/Sewage Associates Degree</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>Two years of experience in the operation of a sewage treatment plant, incorporating biological pond treatment, preliminary and primary treatment, Biological Nutrient Removal (BNR) activated sludge treatment, tertiary treatment, and biosolids handling facilities is required.</li>
              <li>Ability to read and interpret standard operating procedures (SOPs), operational manuals and required facility permits is required.</li>
            </ul>

            <h4>Licenses:</h4>
            <ul>
              <li>Valid Grade II WW Treatment Plant Operator Certificate issued by the State Water Resources Control Board is required</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$35.57 - $50.63/Hour</li>
            </ul>
          </Collapse>
        </div>


        {/* Advanced LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--advanced">
            Advanced
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsFacilitiesManagerOpen(prev => !prev)}>Wastewater Operator III</h4>

          <Collapse isOpen={isFacilitiesManagerOpen}>
            <p>Operates and maintains wastewater treatment, sludge processing, and handling equipment. Tends pumps, conveyors, blowers, chlorinators, vacuum filters, and other equipment used to treat wastewater.</p>

            {/*<h4>Tasks/Responsibilities:</h4>*/}
            {/*<ul>*/}
            {/*  <li>Conducting and planning field work, data analysis and review of projects</li>*/}
            {/*  <li>Work on proposal writing and reviewing, preparing and delivering presentations to partners for business development</li>*/}
            {/*  <li>Manage reports relating to:*/}
            {/*    <ul>*/}
            {/*      <li>Assessment of underwater noise</li>*/}
            {/*      <li>Vessel Strike risk</li>*/}
            {/*      <li>Aerial or vessel-based distance sampling</li>*/}
            {/*    </ul>*/}
            {/*  </li>*/}
            {/*</ul>*/}

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or Equivalent Completion of thirty college level units relating to water/sewage treatment or environmental studies is preferred.</li>
              <li>Water/Sewage Associate&#39;s Degree or equivalent</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>Three years of experience in the operation of a Grade V wastewater recycling facility, incorporating biological pond treatment, preliminary and primary treatment, Biological Nutrient Removal (BNR) activated sludge treatment, tertiary treatment, membrane treatment, and biosolids handling facilities, or an equivalent combination of education and experience required</li>
              <li>Ability to read and interpret standard operating procedures (SOP), blueprints, schematics, operational/maintenance manuals, required facility permits, and follows written and verbal instructions</li>
            </ul>

            <h4>Licenses:</h4>
            <ul>
              <li>Valid Grade III WW Treatment Plant Operator Certificate issued by the State Water Resources Control Board is required</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$38.85 - $55.22/Hour</li>
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
                src={require("assets/img/pathways/clean-water/2.jpeg")}
                style={{maxWidth: '50%' }}
              ></img>
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/pathways/clean-water/1.jpeg")}
                style={{maxWidth: '50%' }}
              ></img>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
}

export default CleanWaterPathway;
