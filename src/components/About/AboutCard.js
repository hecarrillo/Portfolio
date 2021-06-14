import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Héctor Carrillo </span>
            from <span className="purple"> Mexico City, Mexico.</span>
            <br />
            <br />Currently I am a student at IPN ESCOM college in Mexico and a Junior Backend Engineer at Content-oh! Implementing and designing AWS architecture to manage content and product data.
            <br />
            <br />I studied for 3 terms in Canada at UBC persuing a Computer Engineering degree which gave me the oportunity to learn from different cultures and team work, which I still implement to this day.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
