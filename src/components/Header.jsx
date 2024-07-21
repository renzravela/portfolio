import { Container, Navbar, Nav } from "react-bootstrap";
import resume_doc from "../assets/resume_renz_ravela.pdf";


const Header = () => {
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

export default Header;
