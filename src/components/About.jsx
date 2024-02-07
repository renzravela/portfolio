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
              My name is Renz Ravela. I`m a college student and
              currently practicing my skills in developing and designing
              websites and applications. I love to make complex things simple
              and easy to use.
            </p>
          </Col>
          <Col>
            <p>
              Over the past years, I`ve gained experience in developing and
              designing websites, mostly in the frontend aspect because I enjoy
              learning and designing the best user experience and interface for
              the user.
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
              />
              <Skill
                title={`CSS`}
                description={`I keep my CSS manageable and scalable strictly following BEM conventions.`}
                specifics={[`CSS3`, `Bootstrap`, `Sass`, `BEM`]}
                icon={`css3`}
              />
              <Skill
                title={`JavaScript`}
                description={`I'm currently focusing and constantly learning JavaScript and paying attention to code quality.`}
                specifics={[`ES7`]}
                icon={`js`}
              />
              <Skill
                title={`PHP`}
                description={`I have hands-on experience in PHP, I create dynamic and responsive websites with efficient backend functionalities.`}
                specifics={[`Laravel`, `CodeIgniter`]}
                icon={`php`}
              />
              <Skill
                title={`React`}
                description={`Developing the skills to create dynamic and interactive web app, enhancing my expertise in front-end development.`}
                specifics={[`TypeScript`]}
                icon={`react`}
              />
              <Skill
                title={`UI Design`}
                description={`I'm proficient in Figma and constantly learning the best modern UI and UX for applications and websites.`}
                specifics={[`Figma`, `Adobe XD`, `Adobe Photoshop`]}
                icon={`figma`}
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
