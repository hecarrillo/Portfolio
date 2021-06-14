import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

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
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/h_carrillo"
                style={{ color: "white" }}
              >
                <i className="fab fa-hackerrank"></i>
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://t.me/hector_carrillo"
                style={{ color: "white" }}
              >
                <i className="fab fa-telegram"></i>
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hecarrilloe/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/carrillo.h/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
