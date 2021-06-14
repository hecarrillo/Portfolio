import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffff",
    grade4: "#ffff",
    grade3: "#025590",
    grade2: "#025590",
    grade1: "#025590",
    grade0: "#ffff",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github <strong className="purple">footprint</strong>
      </h1>
      <GitHubCalendar
        username="hecarrillo"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
