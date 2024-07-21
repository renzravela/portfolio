import profile from "../assets/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Freelancer"],
    loop: 0,
    typeSpeed: 80,
  });

  return (
    <section id="home" className="banner_section">
      <div className="banner_content">
        <span className="hello">Hello,</span>
        <span className="intro">
          I`m <span className="banner_name">Renz Aerol</span><br />
          <span>{text}</span>
          <span><Cursor/></span>
        </span>
        <p className="intro_p">
          I`m a skilled and passionate developer with experience in creating
          dynamic and visually appealing, user-friendly websites.
        </p>
        <div className="banner_links">
          <a href="https://www.facebook.com/Renz.Aerol" target="blank">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/renz-aerol-ravela/" target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/renzravela" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <img src={profile} alt="profile" className="profile" />
    </section>
  );
};

export default Banner;
