import { Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Project from "../Project";
import RaceReady from "./bgs/f1.png";
import BattleForge from "./bgs/dota2.png";

const Works = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    <section className="works_section text-center">
      <Container>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>All of my works</h1>
        <p style={{ fontSize: 'medium', fontWeight: '100' }}>
              I care about the code quality and simplicity of my work, but also
              pays a lot of attention to small but important details.
            </p>
        <Row className="work_list">
          <Project
            title={`RaceReady Pro: F1`}
            description={`Your All-in-One Formula 1 Companion, Bringing the Thrill of the Track to Your Fingertips with Real-Time Updates, Interactive Simulations, and Exclusive Content!`}
            bg={RaceReady}
            url={`#`}
          />
          <Project
            title={`BattleForge: Dota 2`}
            description={`BattleForge: Dota 2 Mastery, the ultimate mobile companion for every Dota 2 enthusiast, offering real-time match updates, and comprehensive hero guides to enhance your gameplay and dominate the battlefield.`}
            bg={BattleForge}
            url={`#`}
          />
        </Row>
        <Button
          variant="secondary"
          onClick={() => {
            navigate("/");
          }}
          className="explore_btn"
        >
          Return to home{" "}
          <FontAwesomeIcon icon={faChevronRight} className="explore_icon" />
        </Button>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

export default Works;
