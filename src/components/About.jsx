import { Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";
import coder from "../assets/coder.png";
import coder2 from "../assets/coder2.png";
import customStyle from '../css/customStyle.module.css';

const About = () => {
  return (
    <section id="about" className="about_section">
      <Container className="about_container">
        <Row className="about_description flex-column">
          <Col>
            <p>
            Hello, I`m Renz Aerol Ravela, a self-taught full-stack web developer. 
            With a passion for developing and designing websites and applications, 
            I strive to make complex concepts simple and user-friendly. 
            My goal is to create intuitive and efficient solutions that enhance user experiences.
            </p>
          </Col>
          <Col>
            <p>
            Over the past years, I`ve gained valuable experience as a freelancer, 
            primarily in developing and designing both the backend and frontend aspects of websites. 
            I am passionate about learning and creating the best user experiences and interfaces, 
            ensuring that every project I work on is both functional and user-friendly.
            </p>
          </Col>
        </Row>
        <Row className="about_skills">
          <Col>
            <h3 className={customStyle.title}>Technical Skill Set</h3>
            <p className={customStyle.subTitle}>
              I like to explore and learn new things and keep up to date with
              the latest technologies.
            </p>
            <Row className="skills_list">
              <Skill
                title={`HTML`}
                description={`I write semantic markup with accessibility in mind by following the best practices`}
                specifics={[`HTML5`, `Emmet`]}
                icon={`html5`}
                icon_type={`fa-brands`}
              />
              <Skill
                title={`CSS`}
                description={`I keep my CSS manageable and scalable strictly following BEM conventions.`}
                specifics={[`CSS3`, `Bootstrap`, `Tailwind`, `SASS`, `BEM`]}
                icon={`css3`}
                icon_type={`fa-brands`}
              />
              <Skill
                title={`JavaScript`}
                description={`I'm currently focusing and constantly learning JavaScript and paying attention to code quality.`}
                specifics={[`ES6 ES7`, `Node.js`, 'Express.js']}
                icon={`js`}
                icon_type={`fa-brands`}
              />
              <Skill
                title={`React`}
                description={`Developing the skills to create dynamic and interactive web app, enhancing my expertise in front-end development.`}
                specifics={[]}
                icon={`react`}
                icon_type={`fa-brands`}
              />
              <Skill
                title={`PHP`}
                description={`I have hands-on experience in PHP, I create dynamic and responsive websites with efficient backend functionalities.`}
                specifics={[`OOP`, `MVC`]}
                icon={`php`}
                icon_type={`fa-brands`}
              />
              <Skill
                title={`Laravel`}
                description={`Working on backend is my forte. Making my web application functional is my ultimate agenda.`}
                specifics={[`Livewire`]}
                icon={`laravel`}
                icon_type={`fa-brands`}
              />
              <Skill
                title={`CodeIgniter`}
                description={`Specializing in backend development using CodeIgniter. I have intermediate knowledge on creating robust and scalable web applications.`}
                specifics={[]}
                icon={`fire`}
                icon_type={`fa-solid`}
              />
              <Skill
                title={`SQL / NoSQL Database`}
                description={`Writing accurate and robust queries is essential for building a reliable application.`}
                specifics={[`MySQL`, `MongoDB`, `Firebase`]}
                icon={`database`}
                icon_type={`fa-solid`}
              />
              <Skill
                title={`UI Design`}
                description={`I'm proficient in Figma and constantly learning the best modern UI and UX for applications and websites.`}
                specifics={[`Figma`]}
                icon={`figma`}
                icon_type={`fa-brands`}
              />
            </Row>
          </Col>
        </Row>
        <img src={coder} className="coder_icon" />
        <img src={coder2} className="coder2_icon" />
      </Container>
    </section>
  );
};

export default About;
