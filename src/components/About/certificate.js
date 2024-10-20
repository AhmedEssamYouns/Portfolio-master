import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ProjectCard from "./certificateCards";
import a from "../../Assets/Projects/a.jpg";
import java from "../../Assets/Projects/java.jpg";
import ab from "../../Assets/Projects/ab.png";
import as from "../../Assets/Projects/as.png";

import d1 from "../../Assets/Projects/d1.png";
import d2 from "../../Assets/Projects/d2.png";
import a2 from "../../Assets/Projects/a2.png";
import a3 from "../../Assets/Projects/a3.png";
import js from "../../Assets/Projects/js.png";
import z from "../../Assets/Projects/z.png";







function Certificate() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <span className="purple">Certificates</span>
        </h1>
        <p style={{ color: "white" }}>
          here is some certificates of completion that I have achieved.
        </p>
        <h1 className="project-heading">
          <strong className="purple">coursera </strong>certificates
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ab}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Udemy </strong>certificates
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
            />
          </Col>
        </Row>

{/* 
        <h1 className="project-heading">
          <strong className="purple">Sololearn </strong>certificates
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d1}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d2}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={js}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={z}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a2}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a3}
            />
          </Col> */}

{/* 
        </Row> */}


      </Container>
    </Container>
  );
}

export default Certificate;
