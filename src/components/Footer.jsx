import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faCodepen,
  faGithub,
  faLinkedin,
  faInstagram,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_content">
        <p className="footer_note">
          <b>Thanks for scrolling,</b> that`s all folks.
        </p>
        <p className="footer_note">Designed and Developed by <b>Renz Ravela.</b></p>
        <p><small>Powered by REACT <FontAwesomeIcon icon={faReact} /></small></p>
        <div className="footer_links">
          <a href="https://www.facebook.com/Renz.Aerol" target="blank">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a href="https://www.instagram.com/yehreen_/" target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/renzravela" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.jobstreet.com.ph/profile/renzaerol-ravela-9Ld6Q0TFFH" target="blank">
            <FontAwesomeIcon icon="fa-solid fa-link" />
          </a>
          <a href="https://www.linkedin.com/in/renz-aerol-ravela/" target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://codepen.io/yehreen" target="blank">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
