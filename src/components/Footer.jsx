import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTiktok,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_content">
        <p className="mb-5 footer_note">
          <b>Thanks for scrolling,</b> that`s all folks.
        </p>
        <div className="footer_links">
          <a href="">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
