import profile from "../assets/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faDribbble,
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
          <a href="">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </div>
      </div>
      <img src={profile} alt="profile" className="profile" />
    </section>
  );
};

export default Banner;
