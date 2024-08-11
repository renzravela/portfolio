import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
import customStyle from "../css/customStyle.module.css";
import RaceReady from "./Project_Works/bgs/f1.png";
import guidance from "./Project_Works/bgs/guidance.png";
import landing_page from "./Project_Works/bgs/landing.png";
import movie_website from "./Project_Works/bgs/Movie.png";
import gogoanime from "./Project_Works/bgs/GogoAnime.png";
import form from "./Project_Works/bgs/form-firebase.jpg";

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
              <Project
                title={`Guidance Management System`}
                description={`Full-stack web management system for the school's guidance request and reporting functions. Built mainly by Laravel.`}
                bg={guidance}
                url={`#`}
                title_btn={`This work is a freelance project and I like to keep it private. Contact me for more info about this project.`}
                small_text={`This work is a freelance project and I like to keep it private. Contact me for more info about this project.`}
              />
              <Project
                title={`Sample Landing Page UI`}
                description={`Sample landing page UI built with react and tailwind.`}
                bg={landing_page}
                url={`https://renzravela.github.io/landing-page-sample/`}
              />
              <Project
                title={`Movie Review System`}
                description={`Full-stack web application for movie review and rating system. Built mainly by Laravel.`}
                bg={movie_website}
                url={`#`}
                title_btn={`This work is a freelance project and I like to keep it private. Contact me for more info about this project.`}
                small_text={`This work is a freelance project and I like to keep it private. Contact me for more info about this project.`}
              />
              <Project
                title={`GogoAnime Clone`}
                description={`Your All-in-One Formula 1 Companion, Bringing the Thrill of the Track to Your Fingertips with Real-Time Updates, Interactive Simulations, and Exclusive Content!`}
                bg={gogoanime}
                url={`https://renzravela.github.io/gogoanime_website_clone/`}
              />
              <Project
                title={`React Form with Firebase`}
                description={`Sample form UI using React (Vite) with backend integration of NoSQL firebase.`}
                bg={form}
                url={`https://renzravela.github.io/sample-form-with-react-and-firebase/`}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

