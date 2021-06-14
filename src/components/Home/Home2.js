import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/coffe_icon.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE <b className="purple"> ABOUT (ME) &#123; </b>
            </h1>
            <p className="home-about-body">
              I was born in Mexico City 🇲🇽 and I love coffee ☕ <b className="purple">;</b>
              <br />
              <br />I love working with people that I can learn from and <b className="purple"> build great things together;</b>
              <br />
              <br />My favourite programming languages are:
              <i>
                <b className="purple"> Javascript, Java & C++ </b><b className="purple">;</b>
              </i>
              <br />
              <br />
              My goal in life is to&nbsp;
              <i>
                <b className="purple">
                  learn as much as possible and contribute to society with that knowledge 
                </b><b className="purple">;</b>
              </i>
              <br />
              <br />
              I am particularly interested in:
              <i>
                <b className="purple"> IoT, Machine Learning & Cloud Computing </b>
              </i><b className="purple">;</b>
              <br />
              <h1 style={{ fontSize: "2.6em", "padding-top": "1em" }}>
                <b className="purple">&#125; </b>
              </h1>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's connect</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hecarrillo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                <AiOutlineGithub/>
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hecarrilloe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/carrillo.h/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineInstagram/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
