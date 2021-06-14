import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai"
import { FaHackerrank, FaTelegram} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{year} HC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/hecarrillo"
                style={{ color: "white" }}
              >
                <AiOutlineGithub></AiOutlineGithub>
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/h_carrillo"
                style={{ color: "white" }}
              >
                <FaHackerrank/>
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://t.me/hector_carrillo"
                style={{ color: "white" }}
              >
                <FaTelegram/>
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hecarrilloe/"
                style={{ color: "white" }}
              >
                <AiFillLinkedin/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/carrillo.h/"
                style={{ color: "white" }}
              >
                <AiOutlineInstagram/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
