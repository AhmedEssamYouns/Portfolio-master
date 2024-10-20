import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Ahmed Essam </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />studies in department of at Computer Science Faculty of Science-Cairo University

            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            < li className="about-activity">
              <ImPointRight />  pianist
            </li>
            <li className="about-activity">
              <ImPointRight />  drawing
            </li> */}
            {/* <li className="about-activity">
              <ImPointRight /> Playing Games
            </li> */}
          {/* </ul> */}

        </blockquote>
      </Card.Body >
    </Card >
  );
}

export default AboutCard;
