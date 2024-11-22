import React from 'react';
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import {Col, Collapse, Row} from "reactstrap";

const EnvironmentalEngineeringPathway = () => {
  const [isBuildingMaintenanceWorkerOpen, setIsBuildingMaintenanceWorkerOpen] = React.useState(true);
  const [isBuildingMaintenanceTechnicianOpen, setIsBuildingMaintenanceTechnicianOpen] = React.useState(true);
  const [isBuildingOperatorOpen, setIsBuildingOperatorOpen] = React.useState(true);
  const [isFacilitiesManagerOpen, setIsFacilitiesManagerOpen] = React.useState(true);
  const [isBuildingEngineerOpen, setIsBuildingEngineerOpen] = React.useState(true);
  return (
    <>
      <ExamplesNavbar coloredNav/>
      <h2 className='pathway-page__main-title'>Sustainable Career Pathway - Aquaculture</h2>

      <div className='pathway-page__images-container'>
        <Col className="ml-auto mr-auto" md="10">
          <Row className="collections justify-content-center pathway-page__images-row">
              <img
                alt="..."
                className="img-raised pathway-page__image"
                // todo: update image
                src={require("../../assets/img/sustain-logo.png")}
              ></img>
              <img
                alt="..."
                className="img-raised pathway-page__image"
                // todo: update image
                src={require("../../assets/img/sustain-logo.png")}
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
          <h4 style={{cursor: 'pointer'}} onClick={() => setIsBuildingMaintenanceWorkerOpen(prev => !prev)}>Aquaculture Technician: Related Story: Perry Raso</h4>

          <Collapse isOpen={isBuildingMaintenanceWorkerOpen}>
            <p>to be updated: summary</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Monitor and maintain the health of aquatic species in hatcheries or farms</li>
              <li>Feed fish and monitor water quality parameters (e.g., pH, temperature, salinity)</li>
              <li>Assist in breeding and harvesting operations</li>
              <li>Maintain and repair equipment such as pumps, filters, and tanks</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>High School Diploma or equivalent</li>
              <li>Some college courses in marine biology, environmental science, or aquaculture preferred</li>
              <li>Certificates & Degrees</li>
                <ul>
                    <link rel="icon" type="image/png" href="%PUBLIC_URL%/sustain-logo.png" />
                    <li><a href="https://www.classcentral.com/subject/aquaculture"><b>Certificates for Aquaculture Courses,</b> Class Central</a></li>
                    <li><a href="https://www.uri.edu"><b>Aquaculture and Fisheries Science B.S.,</b> University of Rhode Island</a></li>
                    <li><a href="https://wccc.me.edu/academics/programs/programs-study/aquaculture-technology/ "><b>Aquaculture Technology,</b> Washington County Community College
                    <b> Associates Degree & Certificate Option</b></a></li>
                    <li><a href="https://www.smccme.edu/academics/pathways/public-safety/aquaculture-short-term-training/"><b>Aquaculture Short Term Training,</b> Southern Main Community College</a></li>
                    <li><a href="https://www.morrisville.edu/program/aquaculture-aquatic-science-aas"><b>Aquaculture & Aquatic Science, AAS,</b> SUNY Morrisville</a></li>
                    <li><a href="https://www.btc.edu/Academics/DegreesAndCertificates/FisheriesAndAquacultureSciences/AquacultureScience-Certificate.html"><b>Aquaculture Science Certificate,</b> Bellingham Technical College</a></li>
                    <li><a href="https://www.kysu.edu/academics/college-ahnr/school-of-aas/cert-aas.php"><b>Aquaculture and Aquatic Science Certificate, </b> Kentucky State University</a></li>
                </ul>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>No prior experience necessary for entry-level positions</li>
              <li>Internships or volunteer work in related fields can be helpful</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$30,000 - $40,000 annually (varies by region and company)</li>
            </ul>

            <h4>Job Projections</h4>
            <ul>
              <li>Growing demand for aquaculture professionals due to increasing global seafood consumption</li>
              <li>Projected job growth of 10% or more in the aquaculture sector over the next decade</li>
            </ul>

            <h4>Resources</h4>
            <ul>
              <li>California Aquaculture Association</li>
              <li>Massachusetts Aquaculture Association</li>
              <li>National Marine Fisheries Service (NMFS)</li>
              <li>Aquaculture Careers Portal</li>
            </ul>

            <i>Other Entry Level Jobs: Aquarist, Fish Farm Worker, Hatchery Technician, Water Quality Technician, Aquaculture 
            Farm Assistant, Aquaculture Research Assistant, Shellfish Farm Worker/Technician, Fish Health Assistant, Aquaculture 
            Farm Equipment Operator, Aquaculture Sales and Support</i>
          </Collapse>

          <hr/>

          {/* 2 */}

          <h4 style={{cursor: 'pointer'}}
              onClick={() => setIsBuildingMaintenanceTechnicianOpen(prev => !prev)}>Entry-Level
            Aquarist</h4>

          <Collapse isOpen={isBuildingMaintenanceTechnicianOpen}>
            <p>to be updated: summary</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Caring for marine and freshwater species in aquariums or research facilities
              </li>
              <li>Maintaining aquarium habitats, including water quality, temperature, and filtration systems
              </li>
              <li> Feeding and monitoring the health of fish, invertebrates, and other aquatic organisms
                </li>
              <li>Assisting with breeding programs for endangered or threatened species
              </li>
              <li>Educating the public about marine life and conservation efforts through tours and presentations
              </li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Associate’s degree or higher in Marine Biology, Aquatic Science, Zoology, or a related field</li>
              <li>Certifications in animal care, first aid, and aquarium systems may be beneficial</li>
              <li>On-the-job training is typically provided, including specific training in aquarium systems</li>
              <li>Certificates & Degrees</li>
                <ul>
                    <link rel="icon" type="image/png" href="%PUBLIC_URL%/sustain-logo.png" />
                    <li><a href="https://www.classcentral.com/subject/aquaculture"><b>Certificates for Aquaculture Courses,</b> Class Central</a></li>
                    <li><a href="https://www.uri.edu"><b>Aquaculture and Fisheries Science B.S.,</b> University of Rhode Island</a></li>
                    <li><a href="https://wccc.me.edu/academics/programs/programs-study/aquaculture-technology/ "><b>Aquaculture Technology,</b> Washington County Community College<b> Associates Degree & Certificate Option</b></a></li>
                    <li><a href="https://www.smccme.edu/academics/pathways/public-safety/aquaculture-short-term-training/"><b>Aquaculture Short Term Training,</b> Southern Main Community College</a></li>
                    <li><a href="https://www.morrisville.edu/program/aquaculture-aquatic-science-aas"><b>Aquaculture & Aquatic Science, AAS,</b> SUNY Morrisville</a></li>
                    <li><a href="https://www.btc.edu/Academics/DegreesAndCertificates/FisheriesAndAquacultureSciences/AquacultureScience-Certificate.html"><b>Aquaculture Science Certificate,</b> Bellingham Technical College</a></li>
                    <li><a href="https://www.kysu.edu/academics/college-ahnr/school-of-aas/cert-aas.php"><b>Aquaculture and Aquatic Science Certificate, </b> Kentucky State University</a></li>
                </ul>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>Experience in animal care, especially working with marine or aquatic species, through internships, volunteer work, or part-time jobs</li>
              <li>Previous experience in customer service or public outreach (e.g., giving tours or leading educational programs) is a plus</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>Average Salary: $30,000–$45,000 per year, depending on location and facility size</li>
              <li>Aquarists at larger aquariums or research institutions may earn higher salaries</li>
            </ul>

            <h4>Job Projections</h4>
            <ul>
              <li>Employment for animal caretakers (including aquarists) is projected to grow by 16% from 2021 to 2031, much faster than the average for all occupations</li>
              <li>Factors Driving Growth: Increased interest in marine conservation, public education, and marine science. More aquariums and research facilities are expanding globally, increasing demand for skilled staff</li>
            </ul>

            <h4>Resources</h4>
            <ul>
              <li>California Aquaculture Association</li>
              <li>Massachusetts Aquaculture Association</li>
              <li>American Association of Zoos and Aquariums (AZA): Offers training, certification, and networking opportunities for aquarists</li>
              <li>National Aquarium: Offers educational programs and internship opportunities for aspiring aquarists</li>
              <li>Association of Marine Laboratories of the Caribbean (AMLC): Connects aquarists with marine science resources and networking opportunities</li>
            </ul>

            <i>
            Other Entry Level Jobs: Aquaculture Technician, Fish Farm Worker, Hatchery Technician, Water Quality Technician, 
            Aquaculture Farm Assistant, Aquaculture Research Assistant, Shellfish Farm Worker/Technician, Fish Health Assistant, 
            Aquaculture Farm Equipment Operator, Aquaculture Sales and Support  
            </i>
          </Collapse>
        </div>


        {/* MID LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--mid">
            Mid-Level
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsBuildingOperatorOpen(prev => !prev)}>Aquaculturist: Related Story: Perry Raso</h4>

          <Collapse isOpen={isBuildingOperatorOpen}>
            <p>to be updated: summary</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Overseeing the breeding, growth, and harvesting of aquatic species such as fish, shellfish, or seaweed</li>
              <li>Managing water quality, feeding schedules, and other aspects of aquaculture systems to ensure optimal growth</li>
              <li>Implementing sustainable practices to reduce environmental impact, such as waste management and ecosystem restoration</li>
              <li>Monitoring fish health and implementing disease management practices</li>
              <li>Supervising and training staff on aquaculture practices and safety protocols</li>
              <li>SMaintaining records on production, water quality, and employee performance</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Bachelor’s degree in Aquaculture, Fisheries Science, Marine Biology, or related field</li>
              <li>Additional training or certifications in aquaculture management, water quality control, and disease management is beneficial</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>2–5 years of experience in aquaculture, particularly in the management of fish or shellfish farms</li>
              <li>Experience with the operation and maintenance of aquaculture systems (e.g., Recirculating Aquaculture Systems, or RAS)</li>
              <li>Prior supervisory or leadership experience is valuable</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>Average Salary: $45,000–$65,000 per year, depending on experience, location, and farm size</li>
              <li>Aquaculturist managing larger or more complex aquaculture operations may earn higher salaries</li>
            </ul>

            <h4>Job Projections</h4>
            <ul>
              <li>Job Growth: Employment of fish and game wardens (which includes aquaculture workers) is projected to grow by 7% from 2021 to 2031, which is average growth for all occupations. However, the aquaculture industry itself, especially with the increasing demand for farm-raised seafood, is expected to see stronger growth</li>
              <li>Factors Driving Growth: Increasing global demand for sustainable seafood, new aquaculture technologies, and expansion in fish farming operations</li>
            </ul>

            <h4>Resources</h4>
            <ul>
              <li>California Aquaculture Association</li>
              <li>Massachusetts Aquaculture Association</li>
              <li>Aquaculture Stewardship Council (ASC): Provides guidelines and certification for sustainable aquaculture practices</li>
              <li>The Fish Site: A resource hub for the aquaculture industry, providing articles, industry news, and job opportunities</li>
              <li>World Aquaculture Society: Provides conferences, journals, and resources for aquaculturists</li>
            </ul>

            <i>
            Other Mid Level Jobs: Aquaculture Farm Manager, Aquaculture Production Supervisor, Fish Health Specialist, Aquaculture 
            Technician Lead, Aquaculture Research Coordinator, Aquaculture Sustainability/Compliance Officer, Aquaculture Operations 
            Manager, Aquaculture Systems Engineer/Technologist, Aquaculture Sales and Marketing Manager, Fish Breeding/Genetics 
            Specialist  
            </i>
          </Collapse>
          
          <hr/>
          {/* 2 */}
          <h4 onClick={() => setIsBuildingOperatorOpen(prev => !prev)}>Mid Level: Aquaculture Farm Manager</h4>

          <Collapse isOpen={isBuildingOperatorOpen}>
            <p>to be updated: summary</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Supervise daily operations of an aquaculture farm or hatchery</li>
              <li>Oversee breeding, feeding, harvesting, and disease management</li>
              <li>Manage staff, including technicians and seasonal workers</li>
              <li>Ensure compliance with environmental regulations and industry standards</li>
              <li>Develop and implement strategies to improve production efficiency and sustainability</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Bachelor's degree in Aquaculture, Marine Biology, Environmental Science, or related field</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>3-5 years of experience in aquaculture or related field</li>
              <li>Experience managing staff and overseeing farm or hatchery operations</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$50,000–$70,000 annually (depends on location and company)</li>
            </ul>

            <h4>Job Projections</h4>
            <ul>
              <li>Strong demand for skilled farm managers as the aquaculture industry expands</li>
              <li>Expected job growth of 5–10% as technology and sustainable practices become more prevalent</li>
            </ul>

            <h4>Resources</h4>
            <ul>
              <li>California Aquaculture Association</li>
              <li>Massachusetts Aquaculture Association</li>
              <li>Aquaculture America (Conference)</li>
              <li>World Aquaculture Society (WAS)</li>
              <li>The Aquaculture Network</li>
            </ul>

            <i>
            Other Mid Level Jobs: Aquaculturist, Aquaculture Production Supervisor, Fish Health Specialist, Aquaculture Technician 
            Lead, Aquaculture Research Coordinator, Aquaculture Sustainability/Compliance Officer, Aquaculture Operations Manager, 
            Aquaculture Systems Engineer/Technologist, Aquaculture Sales and Marketing Manager, Fish Breeding/Genetics Specialist   
            </i>
          </Collapse>
        
        </div>


        {/* Advanced LEVEL */}

        <div className="pathway-page__level-container">
          <h3 className="pathway-page__level-title--advanced">
            Advanced
          </h3>

          {/* 1 */}
          <h4 onClick={() => setIsFacilitiesManagerOpen(prev => !prev)}>Sustainable Aquaculturist: Related Story: Perry Raso</h4>

          <Collapse isOpen={isFacilitiesManagerOpen}>
            <p>To be updated: summary</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Designing and implementing sustainable aquaculture practices, including minimizing resource use, reducing waste, and preventing ecosystem damage</li>
              <li>Developing and optimizing aquaculture systems, such as closed-loop systems or integrated multi-trophic aquaculture (IMTA)</li>
              <li>Conducting research on innovative farming techniques, such as using algae for waste removal or developing new feed alternatives</li>
              <li>Collaborating with regulatory bodies, environmental groups, and industry stakeholders to promote sustainable aquaculture practices</li>
              <li>Training and mentoring aquaculturists and farm managers on sustainable practices</li>
              <li>Conducting environmental impact assessments and ensuring compliance with environmental regulations</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Master’s degree or higher in Aquaculture, Marine Biology, Environmental Science, or a related field</li>
              <li>Specialized knowledge in sustainable aquaculture practices, resource management, and environmental science</li>
              <li>Certifications in sustainable agriculture, environmental impact assessments, or marine resource management can be beneficial</li>
              <li>Degrees & Certificates
                <ul>
                  <li>
                    <a href="https://web.uri.edu/favs/academics/graduate-certificate-in-aquaculture-and-fisheries/"><b>Graduate Certificate in Aquaculture and Fisheries, University of Rhode Island</b></a>
                  </li>
                </ul>
              </li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>5+ years of experience in aquaculture management, with a focus on sustainability or environmental protection</li>
              <li>Significant experience with system design, resource management, and sustainable farming techniques</li>
              <li>Experience working with environmental impact assessments and regulatory compliance is a plus</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>Average Salary: $70,000–$100,000 per year, depending on expertise, location, and role within the organization</li>
              <li>Those in leadership or consulting roles with significant industry experience may earn higher salaries</li>
            </ul>

            <h4>Job Projections</h4>
            <ul>
              <li>Job Growth: The sustainability and environmental science sector, including sustainable aquaculturist, is expected to grow by 8% from 2021 to 2031, faster than average</li>
              <li>Factors Driving Growth: Rising global demand for seafood, the need for sustainable practices in aquaculture, and increasing concerns about the environmental impact of fish farming</li>
            </ul>

            <h4>Resources</h4>
            <ul>
              <li>California Aquaculture Association</li>
              <li>Massachusetts Aquaculture Association</li>
              <li>Global Aquaculture Alliance (GAA): Focuses on promoting environmentally responsible aquaculture and provides certifications for sustainable practices</li>
              <li>The Sustainable Fisheries UW: A research group focused on sustainable fisheries and aquaculture practices</li>
              <li>International Society for Sustainable Aquaculture (ISSA): An organization that provides resources and networking for professionals focused on sustainable aquaculture practices</li>
            </ul>
            <i>Other Advanced Jobs: Aquaculture Operations Director, Aquaculture Research Director, Aquaculture Executive, Aquaculture Sustainability and Environmental Strategy Expert, Aquaculture Policy Advisor or Consultant, Fishery Manager or Director, Aquaculture Technology or Engineering Director, Aquaculture Educator or Professor, International Aquaculture Consultant, Aquaculture Entrepreneur/Founder, 
            </i>
          </Collapse>
          <hr/>
          {/* 2 */}
          <h4 onClick={() => setIsFacilitiesManagerOpen(prev => !prev)}>Advanced Level: Aquaculture Research Scientist</h4>
          <Collapse isOpen={isFacilitiesManagerOpen}>
            <p>To be updated: summary</p>

            <h4>Tasks/Responsibilities:</h4>
            <ul>
              <li>Conduct research on fish health, breeding, and nutrition</li>
              <li>Develop new aquaculture techniques and technologies to increase efficiency and sustainability</li>
              <li>Collaborate with universities, government agencies, and private companies on aquaculture innovation</li>
              <li>Publish research findings in academic journals and present at conferences</li>
              <li>Advise policymakers on the environmental impacts of aquaculture practices</li>
            </ul>

            <h4>Education:</h4>
            <ul>
              <li>Ph.D. in Aquaculture, Marine Biology, Fisheries Science, or related field</li>
            </ul>

            <h4>Work Experience:</h4>
            <ul>
              <li>5–10 years of experience in aquaculture research or academic settings</li>
              <li>Experience in grant writing and securing funding for research projects</li>
            </ul>

            <h4>Salary</h4>
            <ul>
              <li>$80,000–$110,000 annually (may vary depending on the organization and location)</li>
            </ul>

            <h4>Job Projections</h4>
            <ul>
              <li>High demand for research scientists focused on sustainable aquaculture practices, fish health, and the development of new technologies</li>
              <li>Job growth in this field is projected to be 7–12% over the next decade</li>
            </ul>

            <h4>Resources</h4>
            <ul>
              <li>Aquaculture Innovation and Research Centers</li>
              <li>NARDP</li>
              <li>American Fisheries Society – Aquaculture Section</li>
              <li>European Aquaculture Society (EAS)</li>
              <li>International Journal of Aquaculture and Fisheries Research</li>
              <li>International Food Policy Research Institute (IFPRI)</li>
            </ul>

            <i>Other Advanced Jobs: Aquaculture Operations Director, Aquaculture Research 
              Director, Aquaculture Executive, Aquaculture Sustainability and Environmental 
              Strategy Expert, Aquaculture Policy Advisor or Consultant, Fishery Manager or 
              Director, Aquaculture Technology or Engineering Director, Aquaculture Educator 
              or Professor, International Aquaculture Consultant, Aquaculture 
              Entrepreneur/Founder</i>
          </Collapse>
        </div>
      </main>
    </>
  );
}

export default EnvironmentalEngineeringPathway;
