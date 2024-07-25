import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tummytales from "../../Assets/Projects/tummytales.png";
import emotion from "../../Assets/Projects/emotion.png";
import groupflow from "../../Assets/Projects/groupflow.png";
import trackify from "../../Assets/Projects/trackify.png";
import shareyourplate from "../../Assets/Projects/shareyourplate.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import busmanagement from "../../Assets/Projects/busmanagement.png";
import nutrivista from "../../Assets/Projects/nutrivista.png";

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
              imgPath={nutrivista}
              isBlog={false}
              title="NutriVista"
              description="NutriVista is a food information web app built with ReactJS, Spring Boot, and AWS. It uses Selenium for data scraping and MongoDB for storage, enhancing user engagement by 20% in three months."
              ghLink="https://github.com/utkarshhh17/Nutrivista"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Assistify"
              description="Assistify is a customer service chatbot developed with a fine-tuned LLM model and React frontend. It uses QLoRA and RAG technology, improving response times by 50% and user interaction by 25%."
              ghLink="https://github.com/utkarshhh17/Assistify"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trackify}
              isBlog={false}
              title="Trackify"
              description="Trackify is a price tracker tool created with Python, Spring Boot, and ReactJS. It provides real-time price updates, improving data fetching by 30% and increasing user adoption by 20%."
              ghLink="https://github.com/utkarshhh17/Trackify"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groupflow}
              isBlog={false}
              title="GroupFlow"
              description="GroupFlow is a real-time chat application built with ReactJS, Spring Boot, and AWS. It uses Spring Boot WebSocket and ensures 99.9% uptime, increasing active user sessions by 30%"
              ghLink="https://github.com/utkarshhh17/GroupFlow"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tummytales}
              isBlog={false}
              title="TummyTales"
              description="TummyTales is a recipe web app using ReactJS, Tailwind, and NodeJS. It features API integration, user authentication, and MongoDB for storage, enhancing performance with cache memory."
              ghLink="https://github.com/utkarshhh17/TummyTales"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareyourplate}
              isBlog={false}
              title="ShareYourPlate"
              description="ShareYourPlate is a food donation web app built with HTML, CSS, React, and AppWrite. It includes user registration and donation tracking."
              ghLink="https://github.com/utkarshhh17/TummyTales"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dark Pattern Detector Chrome Extension"
              description="A Chrome extension built with Vite and ReactJS to detect dark patterns on webpages using a FastAPI server and a trained model."
              ghLink="https://github.com/utkarshhh17/TummyTales"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busmanagement}
              isBlog={false}
              title="Bus Management System"
              description="A bus management web app developed with HTML, CSS, JavaScript, and Flask, implementing booking, scheduling, and employee management."
              ghLink="https://github.com/utkarshhh17/TummyTales"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
