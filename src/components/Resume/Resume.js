// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import pdf from "../../Assets/cv.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai"

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       upadteCgpa(res.data.message[2].cgpa);
  //       upadateSem(res.data.message[3].sem);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineCloudDownload>&nbsp;</AiOutlineCloudDownload> Download PDF
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              company="@ KONFIO"
              url="https://www.linkedin.com/company/konfio/"
              title="SOFTWARE ENGINEERING INTERN"
              date="March 2020 - August 2020"
              content={[
                "Implemented and optimized web scrapers using JavaScript (Node.js environment) deployed to AWS for the data mining division.",
                "Improved reliability of the team ́s API increasing uptime from 60% - 70% to 95% on average by creating backup mechanisms such as circuit breakers and cache optimization.",
              ]}
            />
            <Resumecontent
              // company=""
              // url="#"
              title="BACKEND DEVELOPER - FREELANCE"
              date="JANUARY 2021 - MAY 2021"
              content={[
                "Worked with a new startup company (founded May 2020) to implement and design their new AWS back-end architecture.",
                "Implemented REST APIs to provide various services for the company such as authentication, payments and email sending endpoints.",
                "Designed, deployed and maintained a NoSQL Database using DynamoDB (AWS) with GraphQL endpoints. It has been tested with 100+ people in the beta phase of the project providing reliable and secure access (using Cognito authentication) to data."
              ]}
            />
            <Resumecontent
              company="@ CONTENT-OH!"
              url="https://www.linkedin.com/company/content-oh/"
              title="BACKEND DEVELOPER"
              date="MAY 2020 - PRESENT"
              content={[
                "Implementing and designing AWS architecture to manage content and product data for vendors (+350). This will allow them to sell in more than 100 international digital retailers such as Walmart and Amazon seamlessly.",
                "Designed and maintaining a MySQL DB, constructed from non-normalized data sources. This was done through ETL processes and data analysis. Achieved a size reduction of over 50% eliminating redundant and waste data.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="INSTITUTO POLITÉCNICO NACIONAL"
              date="JAN 2021 - MAY 2025"
              content={["Computer Engineering @ Computer Science College (ESCOM)"]}
            />
            <Resumecontent
              title="UNIVERSITY OF BRITISH COLUMBIA"
              date="SEP 2018 - DEC 2019"
              content={["Computer Engineering @ Kelowna & Vancouver, BC"]}
            />
            <Resumecontent
              title="UNIVERSIDAD PANAMERICANA HIGH SCHOOL"
              date="GRAD. MAY 2018"
              content={["Physics and Math emphasis"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title="Problem Solving (Intermediate)"
              content={[ "HackerRank"
              ]}
            />
            <Resumecontent
              title="2019 Canadian Stratospheric Balloon Experiment Design Challenge Winner Project"
              content={[ "Canadian Space Agency, Centre National d‘études Spatiales & SEDS Canada"
              ]}
            />
            <Resumecontent
              title="2018 Outstanding International Student Award"
              content={[ "University of British Columbia"
              ]}
            />
            <Resumecontent
              title="2018 National Robotics Champions"
              content={[ "FIRST Robotics Competition"
              ]}
            />
            <Resumecontent
              title="2017 Zhang Heng Award for Engineering Design, 3rd Place"
              content={[ "FIRST Global Competition"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineCloudDownload>&nbsp;</AiOutlineCloudDownload> Download PDF
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
