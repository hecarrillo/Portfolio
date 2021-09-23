import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { FaPython, FaJava, FaAws } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { DiGitBranch } from "react-icons/di"
import { SiCplusplus, SiMathworks, SiReact, SiMysql, SiGraphql, SiUbuntu, SiAtom, SiVisualstudio} from "react-icons/si"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Hi, <strong className="purple">stranger!</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <FaPython/>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <FaJava/>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <IoLogoJavascript/>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <FaAws/>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <DiGitBranch/>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiCplusplus></SiCplusplus>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiMathworks></SiMathworks>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiReact></SiReact>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiMysql></SiMysql>
            </Col>
          </div>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiGraphql></SiGraphql>
            </Col>
          </div>

        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiUbuntu></SiUbuntu>
            </Col>
          </div>

          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiAtom></SiAtom>
            </Col>
          </div>

          <div>
            <Col xs={4} md={2} className="tech-icons">
              <SiVisualstudio></SiVisualstudio>
            </Col>
          </div>

        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
