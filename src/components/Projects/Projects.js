import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ac2oMe from "../../Assets/Projects/ac2oTeam.webp";
import panterasMe from "../../Assets/Projects/panteras_group.jpg"
import firstglobal from "../../Assets/Projects/firstglobal.jpg"
import landrover from "../../Assets/Projects/landrover.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My most interesting <strong className="purple">Projects </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac2oMe}
              isBlog={false}
              title="AC2O"
              description="Responsible for developing a control and telemetry system on board of a physics
              experiment using a RaspberryPi and Python to handle the automation and sensor
              data retrieval. Launched to the stratosphere in partnership with the Canadian Space
              Agency and CNES France at the Timmins Stratospheric Ballon Base."
              link="https://news.ok.ubc.ca/2019/07/24/ubco-students-put-cosmic-ray-research-aloft/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panterasMe}
              isBlog={false}
              title="Panteras 2283"
              description="Responsible for developing control and automation software forthe FRC
              Competition Robot using LABVIEW deployed to NIroboRIO which won the national league and earned a spot in the World Championship in Houston, Texas"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firstglobal}
              isBlog={false}
              title="FIRST Global 2017"
              description="National selected to represent Mexico in the FIRST Global Challenge held in
              Washington D.C. as member of the programming team."
              link="https://www.mipatente.com/mexico-es-bronce-en-first-global-challenge/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={landrover}
              isBlog={false}
              title="Land Rover 4x4 in Schools Championship"
              description="National selected forthe 4x4 Land Rover Challenge held in Abu Dhabi, U.A.E. as
              Design and Engineering lead."
              link="https://www.panterasup.com/lr-4x4-in-schools"
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
