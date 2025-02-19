import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Accordions({
  id,
  jobIcon,
  job,
  tasksResponsibilities,
  education,
  certificatesDegrees,
  workExperience,
  salary,
  jobProjections,
  resources,
  otherRelatedJobs,
}) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };

  return (
    <Accordion flush open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId={id}>
          <span style={{ fontSize: "1.3rem" }}>
            <img
              src={jobIcon}
              alt="Icon"
              style={{
                maxWidth: "100%",
                height: "auto", // Keeps the aspect ratio
                width: "50px", // Set an initial size but allow scaling
                marginRight: "3px",
              }}
            />{" "}
            <b>{job}</b>
          </span>
        </AccordionHeader>
        <AccordionBody accordionId={id}>
          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/tasks-responsibilities-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Tasks + Responsibilities:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {tasksResponsibilities.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                • {task}
              </ListGroupItem>
            ))}
          </ListGroup>

          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/education-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Education:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {education.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                • {task}
              </ListGroupItem>
            ))}
          </ListGroup>

          {certificatesDegrees.length > 0 && (
            <>
              <CardText className="career-card-text">
                <img
                  src={require("../../assets/img/pathways-page/certificates-icon.png")}
                  alt="Icon"
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
                <strong>Certificates & Degrees:</strong>
              </CardText>
              <ListGroup className="career-list-group">
                {certificatesDegrees.map(([text, link], index) => (
                  <ListGroupItem
                    key={index}
                    className="bullet-item career-list-group-item"
                  >
                    •{" "}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
                    >
                      {text}
                    </a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </>
          )}

          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/work-experience-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Work Experience:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {workExperience.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                • {task}
              </ListGroupItem>
            ))}
          </ListGroup>
          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/salaries-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Salary:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {salary.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                • {task}
              </ListGroupItem>
            ))}
          </ListGroup>
          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/job-projections-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Job Projections:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {jobProjections.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                • {task}
              </ListGroupItem>
            ))}
          </ListGroup>
          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/resources-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Resources:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {resources.map(([text, link], index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                •{" "}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {text}
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
          <CardText className="career-card-text">
            <img
              src={require("../../assets/img/pathways-page/other-related-jobs-icon.png")}
              alt="Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <strong>Other Related Jobs:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {otherRelatedJobs.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                {task}
              </ListGroupItem>
            ))}
          </ListGroup>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordions;
