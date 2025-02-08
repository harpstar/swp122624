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
          <span>
            <i className="fas fa-cog"></i> {job}
          </span>
        </AccordionHeader>
        <AccordionBody accordionId={id}>
          <CardText className="career-card-text">
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
            <strong>Word Experience:</strong>
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
            <strong>Other Related Jobs:</strong>
          </CardText>
          <ListGroup className="career-list-group">
            {otherRelatedJobs.map((task, index) => (
              <ListGroupItem
                key={index}
                className="bullet-item career-list-group-item"
              >
                • {task}
              </ListGroupItem>
            ))}
          </ListGroup>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordions;
