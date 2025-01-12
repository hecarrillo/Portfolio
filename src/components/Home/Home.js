import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/circled_me.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";


function Home() {
  return (
    <section>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Hola! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Hector Carrillo</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={homeLogo} alt="Me" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      <Home2 />
    </section>
  );
}

export default Home;
