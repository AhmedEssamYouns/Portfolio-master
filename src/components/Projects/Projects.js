import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import fit from "../../Assets/Projects/fit.png";
import cafe from "../../Assets/Projects/cafe.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import apple from "../../Assets/Projects/apple.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafe}
              isBlog={false}
              title="cafe-connect"
              description="full mern stack social media platform - sharing posts with likes , comments with replies and chat"
              ghLink="https://github.com/AhmedEssamYouns/cafe-connect"
              demoLink="https://cafe-connect-ahmedessamyounsa.web.app/"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fit}
              isBlog={false}
              title="Fit-Nutration"
              description="Supplement store for the brands in Egypt. build with react.js, Material-UI and Redux ."
              ghLink="https://github.com/EssaMohy/CS309Front"
              demoLink="https://fit-4c720.web.app/"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="apple-store"
              description="a fully responsive store for apple products. build with react.js, Material-UI and Redux "
              ghLink='https://github.com/AhmedEssamYouns/react-js-e-commerse'
              demoLink="https://online-apple-store.web.app"
            />


          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
