import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import Accordions from "views/index-sections/Accordions";

const aquaTechnician = {
  job: "Aquaculture Technician",
  tasksResponsibilities: [
    "Monitor and maintain the health of aquatic species in hatcheries or farms",
    "Feed fish and monitor water quality parameters (e.g., pH, temperature, salinity",
    "Assist in breeding and harvesting operations",
    "Maintain and repair equipment such as pumps, filters, and tanks",
  ],
  education: [
    "High School Diploma or equivalent",
    "Some college courses in marine biology, environmental science, or aquaculture preferred",
  ],
  certificatesDegrees: [
    [
      "Certificates for Aquaculture Courses, Class Central",
      "https://www.classcentral.com/subject/aquaculture",
    ],
    [
      "Certificate & Associate Degree in Aquaculture Technology, College of the Redwoods",
      "https://www.redwoods.edu/academics/aqua.php",
    ],
    [
      "Aquaculture and Fisheries Science B.S., University of Rhode Island",
      "https://www.uri.edu",
    ],
    [
      "Aquaculture, Santa Monica College",
      "https://www.smc.edu/academics/academic-departments/life-sciences/aquaculture.php",
    ],
    [
      "Fisheries Biology, Aquaculture Concentration, B.S, Humboldt Community College",
      "https://catalog.humboldt.edu/preview_program.php?catoid=12&poid=7381&returnto=1975",
    ],
    [
      "Aquaculture Technology, Washington County Community College Associates Degree & Certificate Option",
      "https://wccc.me.edu/academics/programs/programs-study/aquaculture-technology/",
    ],
    [
      "Aquaculture Short Term Training, Southern Maine Community College",
      "https://www.smccme.edu/academics/pathways/public-safety/aquaculture-short-term-training/",
    ],
    [
      "Aquaculture & Aquatic Science, AAS, SUNY Morrisville",
      "https://www.morrisville.edu/program/aquaculture-aquatic-science-aas",
    ],
    [
      "Aquaculture Science Certificate, Bellingham Technical College",
      "https://www.btc.edu/Academics/DegreesAndCertificates/FisheriesAndAquacultureSciences/AquacultureScience-Certificate.html",
    ],
    [
      "Aquaculture and Aquatic Science Certificate, Kentucky State University",
      "https://www.kysu.edu/academics/college-ahnr/school-of-aas/cert-aas.php",
    ],
  ],

  workExperience: [
    "No prior experience necessary for entry-level positions",
    "Internships or volunteer work in related fields can be helpful",
  ],
  salary: ["$38,000–$54,000 annually (varies by region and company)"],
  jobProjections: [
    "Growing demand for aquaculture professionals due to increasing global seafood consumption",
    "Projected job growth of 10% or more in the aquaculture sector over the next decade",
  ],
  resources: [
    ["California Aquaculture Association", "https://caaquaculture.org/"],
    ["Massachusetts Aquaculture Association", "https://maaquaculture.org/"],
    [
      "National Marine Fisheries Service (NMFS)",
      "https://www.commerce.gov/bureaus-and-offices/noaa/nmfs",
    ],
    ["Aquaculture Careers Portal", "https://pcsga.org/"],
  ],

  otherRelatedJobs: [
    "Aquarist, Fish Farm Worker, Hatchery Technician, Water Quality Technician, Aquaculture Farm Assistant, Aquaculture Research Assistant, Shellfish Farm Worker/Technician, Fish Health Assistant, Aquaculture Farm Equipment Operator, Aquaculture Sales and Support",
  ],
};

const entryLevelAquarist = {
  job: "Entry-Level Aquarist",
  tasksResponsibilities: [
    "Caring for marine and freshwater species in aquariums or research facilities",
    "Maintaining aquarium habitats, including water quality, temperature, and filtration systems",
    "Feeding and monitoring the health of fish, invertebrates, and other aquatic organisms",
    "Assisting with breeding programs for endangered or threatened species",
    "Educating the public about marine life and conservation efforts through tours and presentations",
  ],
  education: [
    "Associate’s degree or higher in Marine Biology, Aquatic Science, Zoology, or a related field",
    "Certifications in animal care, first aid, and aquarium systems may be beneficial",
    "On-the-job training is typically provided, including specific training in aquarium systems",
  ],
  certificatesDegrees: [
    [
      "Certificates for Aquaculture Courses, Class Central",
      "https://www.classcentral.com/subject/aquaculture",
    ],
    [
      "Aquaculture and Fisheries Science B.S.,</b> University of Rhode Island",
      "https://www.uri.edu",
    ],
    [
      "Aquaculture, Santa Monica College",
      "https://www.smc.edu/academics/academic-departments/life-sciences/aquaculture.php",
    ],
    [
      "Fisheries Biology, Aquaculture Concentration, B.S, Humboldt Community College",
      "https://catalog.humboldt.edu/preview_program.php?catoid=12&poid=7381&returnto=1975",
    ],
    [
      "Aquaculture Technology, Washington County Community College Associates Degree & Certificate Option",
      "https://wccc.me.edu/academics/programs/programs-study/aquaculture-technology/",
    ],
    [
      "Aquaculture Short Term Training, Southern Maine Community College",
      "https://www.smccme.edu/academics/pathways/public-safety/aquaculture-short-term-training/",
    ],
    [
      "Aquaculture & Aquatic Science, AAS, SUNY Morrisville",
      "https://www.morrisville.edu/program/aquaculture-aquatic-science-aas",
    ],
    [
      "Aquaculture Science Certificate, Bellingham Technical College",
      "https://www.btc.edu/Academics/DegreesAndCertificates/FisheriesAndAquacultureSciences/AquacultureScience-Certificate.html",
    ],
    [
      "Aquaculture and Aquatic Science Certificate, Kentucky State University",
      "https://www.kysu.edu/academics/college-ahnr/school-of-aas/cert-aas.php",
    ],
  ],

  workExperience: [
    "Experience in animal care, especially working with marine or aquatic species, through internships, volunteer work, or part-time jobs",
    "Previous experience in customer service or public outreach (e.g., giving tours or leading educational programs) is a plus",
  ],
  salary: [
    "Average Salary: $36,000–$58,000 per year, depending on location and facility size",
    "Aquarists at larger aquariums or research institutions may earn higher salaries",
  ],
  jobProjections: [
    "Employment for animal caretakers (including aquarists) is projected to grow by 16% from 2021 to 2031, much faster than the average for all occupations",
    "Factors Driving Growth: Increased interest in marine conservation, public education, and marine science. More aquariums and research facilities are expanding globally, increasing demand for skilled staff",
  ],
  resources: [
    ["California Aquaculture Association", "https://caaquaculture.org/"],
    ["Massachusetts Aquaculture Association", "https://maaquaculture.org/"],
    [
      "American Association of Zoos and Aquariums (AZA):Offers training, certification, and networking opportunities for aquarists",
      "https://www.national-aquarium.co.uk/learning-at-the-aquarium/",
    ],
    [
      "National Aquarium:Offers educational programs and internship opportunities for aspiring aquarists",
      "https://pcsga.org/",
    ],
    [
      "Association of Marine Laboratories of the Caribbean (AMLC):Connects aquarists with marine science resources and networking opportunities",
      "http://amlc-carib.org/",
    ],
    ["Pacific Coast Shellfish Growers Association", "https://pcsga.org/"],
  ],

  otherRelatedJobs: [
    "Aquaculture Technician, Fish Farm Worker, Hatchery Technician, Water Quality Technician, Aquaculture Farm Assistant, Aquaculture Research Assistant, Shellfish Farm Worker/Technician, Fish Health Assistant, Aquaculture Farm Equipment Operator, Aquaculture Sales and Support",
  ],
};

const aquaculturist = {
  job: "Aquaculturist",
  tasksResponsibilities: [
    "Overseeing the breeding, growth, and harvesting of aquatic species such as fish, shellfish, or seaweed",
    "Managing water quality, feeding schedules, and other aspects of aquaculture systems to ensure optimal growth",
    "Implementing sustainable practices to reduce environmental impact, such as waste management and ecosystem restoration",
    "Monitoring fish health and implementing disease management practices",
    "Supervising and training staff on aquaculture practices and safety protocols",
    "Maintaining records on production, water quality, and employee performance",
  ],
  education: [
    "Bachelor’s degree in Aquaculture, Fisheries Science, Marine Biology, or related field",
    "Additional training or certifications in aquaculture management, water quality control, and disease management is beneficial",
  ],
  certificatesDegrees: [
    [
      "Fisheries Biology, Aquaculture Concentration, B.S, Humboldt Community College",
      "https://catalog.humboldt.edu/preview_program.php?catoid=12&poid=7381&returnto=1975",
    ],
    [
      "Associate Degree in Aquaculture Technology,College of the Redwoods",
      "https://www.redwoods.edu/academics/aqua.php",
    ],
    [
      "Aquaculture and Fisheries Science B.S.,</b> University of Rhode Island",
      "https://www.uri.edu",
    ],
    [
      "Aquaculture, Santa Monica College",
      "https://www.smc.edu/academics/academic-departments/life-sciences/aquaculture.php",
    ],

    [
      "Aquaculture Technology, Washington County Community College Associates Degree & Certificate Option",
      "https://wccc.me.edu/academics/programs/programs-study/aquaculture-technology/",
    ],
    [
      "Aquaculture Short Term Training, Southern Maine Community College",
      "https://www.smccme.edu/academics/pathways/public-safety/aquaculture-short-term-training/",
    ],
    [
      "Aquaculture & Aquatic Science, AAS, SUNY Morrisville",
      "https://www.morrisville.edu/program/aquaculture-aquatic-science-aas",
    ],
  ],

  workExperience: [
    "2–5 years of experience in aquaculture, particularly in the management of fish or shellfish farms",
    "Experience with the operation and maintenance of aquaculture systems (e.g., Recirculating Aquaculture Systems, or RAS)",
    "Prior supervisory or leadership experience is valuable",
  ],
  salary: [
    "Average Salary: $57,000–$128,000 per year, depending on experience, location, and farm size",
    "Aquaculturists managing larger or more complex aquaculture operations may earn higher salaries",
  ],
  jobProjections: [
    "Job Growth: Employment of fish and game wardens (which includes aquaculture workers) is projected to grow by 7% from 2021 to 2031, which is average growth for all occupations. However, the aquaculture industry itself, especially with the increasing demand for farm-raised seafood, is expected to see stronger growth",
    "Factors Driving Growth: Increasing global demand for sustainable seafood, new aquaculture technologies, and expansion in fish farming operations",
  ],
  resources: [
    ["California Aquaculture Association", "https://caaquaculture.org/"],
    ["Massachusetts Aquaculture Association", "https://maaquaculture.org/"],
    [
      "The Fish Site: A resource hub for the aquaculture industry, providing articles, industry news, and job opportunities",
      "https://thefishsite.com/",
    ],
    [
      "World Aquaculture Society: Provides conferences, journals, and resources for aquaculturists",
      "https://www.was.org/",
    ],
  ],

  otherRelatedJobs: [
    "Aquaculture Farm Manager, Aquaculture Production Supervisor, Fish Health Specialist, Aquaculture Technician Lead, Aquaculture Research Coordinator, Aquaculture Sustainability/Compliance Officer, Aquaculture Operations Manager, Aquaculture Systems Engineer/Technologist, Aquaculture Sales and Marketing Manager, Fish Breeding/Genetics Specialist",
  ],
};

const aquacultureFarmManager = {
  job: "Aquaculture Farm Manager",
  tasksResponsibilities: [
    "Supervise daily operations of an aquaculture farm or hatchery",
    "Oversee breeding, feeding, harvesting, and disease management",
    "Manage staff, including technicians and seasonal workers",
    "Ensure compliance with environmental regulations and industry standards",
    "Develop and implement strategies to improve production efficiency and sustainability",
  ],
  education: [
    "Bachelor's degree in Aquaculture, Marine Biology, Environmental Science, or related field",
  ],
  certificatesDegrees: [
    [
      "Fisheries Biology, Aquaculture Concentration, B.S, Humboldt Community College",
      "https://catalog.humboldt.edu/preview_program.php?catoid=12&poid=7381&returnto=1975",
    ],
    [
      "Aquaculture and Fisheries Science B.S.,</b> University of Rhode Island",
      "https://www.uri.edu",
    ],
    [
      "Aquaculture, Santa Monica College",
      "https://www.smc.edu/academics/academic-departments/life-sciences/aquaculture.php",
    ],
  ],

  workExperience: [
    "3-5 years of experience in aquaculture or related field",
    "Experience managing staff and overseeing farm or hatchery operations",
  ],
  salary: ["$50,000–$116,000 annually (depends on location and company)"],
  jobProjections: [
    "Strong demand for skilled farm managers as the aquaculture industry expands",
    "Expected job growth of 5–10% as technology and sustainable practices become more prevalent",
  ],
  resources: [
    ["California Aquaculture Association", "https://caaquaculture.org/"],
    ["Massachusetts Aquaculture Association", "https://maaquaculture.org/"],
    ["Aquaculture – The Triennial", "https://www.was.org/meeting"],
    [
      "National Oceanic and Atmospheric Administration (NOAA) Fisheries",
      "https://www.fisheries.noaa.gov/topic/aquaculture",
    ],
    ["World Aquaculture Society (WAS)", "https://www.was.org/"],
    ["The Aquaculture Network", "https://www.aquanet.com/"],
    ["Pacific Coast Shellfish Growers Association", "https://pcsga.org/"],
  ],

  otherRelatedJobs: [
    "Aquaculturist, Aquaculture Production Supervisor, Fish Health Specialist, Aquaculture Technician Lead, Aquaculture Research Coordinator, Aquaculture Sustainability/Compliance Officer, Aquaculture Operations Manager, Aquaculture Systems Engineer/Technologist, Aquaculture Sales and Marketing Manager, Fish Breeding/Genetics Specialist",
  ],
};

const aquacultureResearchScientist = {
  job: "Aquaculture Research Scientist",
  tasksResponsibilities: [
    "Conduct research on fish health, breeding, and nutrition",
    "Develop new aquaculture techniques and technologies to increase efficiency and sustainability",
    "Collaborate with universities, government agencies, and private companies on aquaculture innovation",
    "Publish research findings in academic journals and present at conferences",
    "Advise policymakers on the environmental impacts of aquaculture practices",
  ],
  education: [
    "Ph.D. in Aquaculture, Marine Biology, Fisheries Science, or related field",
  ],
  certificatesDegrees: [],

  workExperience: [
    "5–10 years of experience in aquaculture research or academic settings",
    "Experience in grant writing and securing funding for research projects",
  ],
  salary: [
    "$80,000–$110,000 annually (may vary depending on the organization and location)",
  ],
  jobProjections: [
    "High demand for research scientists focused on sustainable aquaculture practices, fish health, and the development of new technologies",
    "Job growth in this field is projected to be 7–12% over the next decade",
  ],
  resources: [
    [
      "American Fisheries Society – Aquaculture Section",
      "https://fisheries.org/category/aquaculture/",
    ],
    ["European Aquaculture Society (EAS)", "https://www.aquaeas.eu/"],
    [
      "International Journal of Aquaculture and Fisheries Research",
      "https://eajournals.org/ijfar/",
    ],
    [
      "International Food Policy Research Institute (IFPRI)",
      "https://www.ifpri.org/",
    ],
    ["Wildtype Foods", "https://www.wildtypefoods.com/careers"],
  ],

  otherRelatedJobs: [
    "Aquaculture Operations Director, Aquaculture Research Director, Aquaculture Executive, Aquaculture Sustainability and Environmental Strategy Expert, Aquaculture Policy Advisor or Consultant, Fishery Manager or Director, Aquaculture Technology or Engineering Director, Aquaculture Educator or Professor, International Aquaculture Consultant, Aquaculture Entrepreneur/Founder",
  ],
};

const AquaculturePathway = () => {
  return (
    <>
      <Container fluid className="py-5 career-container">
        <div>
          <h2 className="text-center mb-4">Aquaculture Career Pathway</h2>

          <div className="image-container">
            <div className="image-box">
              <img
                alt="..."
                className="text-muted"
                src={require("../../assets/img/pathways/aquaculture/matnuck-boat2-062219.jpeg")}
              ></img>
            </div>
            <div className="image-box">
              <img
                alt="..."
                className="text-muted"
                src={require("../../assets/img/pathways/aquaculture/aquaculture.jpg")}
              ></img>
            </div>
          </div>

          <Row>
            {/* Entry-Level Jobs Column */}
            <Col md={4}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle className="job-level entry-level career-pathway-card-title">
                    Entry-Level Jobs
                  </CardTitle>
                  <Accordions {...aquaTechnician} />
                  <Accordions {...entryLevelAquarist} />
                </CardBody>
              </Card>
            </Col>

            {/* Mid-Level Jobs Column */}
            <Col md={4}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle className="job-level mid-level career-pathway-card-title">
                    Mid-level Jobs
                  </CardTitle>
                  <Accordions {...aquaculturist} />
                  <Accordions {...aquacultureFarmManager} />
                </CardBody>
              </Card>
            </Col>

            {/* Advanced Jobs Column */}
            <Col md={4}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle className="job-level advanced-level career-pathway-card-title">
                    Advanced Jobs
                  </CardTitle>
                  <Accordions {...aquacultureResearchScientist} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default AquaculturePathway;
