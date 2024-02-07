import { Container, Row, Col, Button } from "react-bootstrap";
import Project from "./Project";
import customStyle from "../css/customStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import RaceReady from "./Project_Works/bgs/f1.png";
import BattleForge from "./Project_Works/bgs/dota2.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

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
              />
              <Project
                title={`BattleForge: Dota 2`}
                description={`BattleForge: Dota 2 Mastery, the ultimate mobile companion for every Dota 2 enthusiast, offering real-time match updates, and comprehensive hero guides to enhance your gameplay and dominate the battlefield.`}
                bg={BattleForge}
              />
            </Row>
            <div className="explore_more p-2">
              <Button
                className="explore_btn"
                onClick={() => {
                  navigate("/works");
                }}
              >
                Explore More{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="explore_icon"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
