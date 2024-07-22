import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
import customStyle from "../css/customStyle.module.css";
import RaceReady from "./Project_Works/bgs/f1.png";

const Projects = () => {
  return (
    <section id="projects" className="project_section">
      <Container>
        <Row>
          <Col>
            <h3 className={customStyle.title_center}>All Creative Works,</h3>
            <h3 className={customStyle.title_center}>Selected Projects.</h3>
            <p className={customStyle.subTitle_center}>
              I care about the code quality and simplicity of my work, but also
              pays a lot of attention to small but important details.
            </p>
            <Row className="project_list">
              <Project
                title={`RaceReady Pro: F1`}
                description={`Your All-in-One Formula 1 Companion, Bringing the Thrill of the Track to Your Fingertips with Real-Time Updates, Interactive Simulations, and Exclusive Content!`}
                bg={RaceReady}
                url={`https://renzravela.github.io/project-racereadypro/`}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
