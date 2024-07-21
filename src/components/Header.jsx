import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import resume_doc from "../assets/resume_renz_ravela.pdf";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  console.log(location);

  if (location === "/works") {
    return (
      <header>
        <Navbar id="nav_bar" expand="lg" className="navbar-dark">
          <Nav.Item>
            <Nav.Link
              id="return_btn"
              onClick={() => {
                navigate("/");
              }}
              className="nav_link return_btn"
              style={{ height: "100%", textAlign: "center", padding: "" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="return_icon" />
              {" "}
              Home
            </Nav.Link>
          </Nav.Item>
          <Container>
            <Navbar.Brand id="navbar_hero" style={{ color: "inherit" }}>
              Renz Ravela
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav_list"></Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="w-100 justify-content-end">
                <Nav.Item>
                  <Nav.Link id="resume" href={resume_doc} download="resume_doc">
                    Download CV
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  } else {
    return (
      <header>
        <Navbar id="nav_bar" expand="lg" className="navbar-dark">
          <Container>
            <Navbar.Brand id="navbar_hero" style={{ color: "inherit" }}>
              Renz Ravela
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav_list"></Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="nav_list">
                <Nav.Item>
                  <Nav.Link className="nav_link" href="#home">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav_link" href="#about">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav_link" href="#projects">
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav_link" href="#contact">
                    Contacts
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav>
                <Nav.Item>
                  <Nav.Link id="resume" href={resume_doc} download="RenzRavela-Resume">
                    Download CV
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
};

export default Header;
