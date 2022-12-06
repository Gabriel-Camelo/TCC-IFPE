import {useState} from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavigationBar = (props: NavigationBarProps) => {

  const [theme, setTheme] = useState<string>("light");

  const expand = props.expand;
  return (
    <Navbar id="navbar" sticky="top" key={expand} bg={theme} expand={expand} variant={theme} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src="/logo.png" width={28} height={38}/></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              IFPE TCC's
            </Offcanvas.Title>
          </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link id="navlink" href="#action1">Inicío</Nav.Link>
                <Nav.Link id="navlink" href="#action2">Perfil</Nav.Link>
                <NavDropdown
                  title="Seções"
                  id="navlink"
                >
                  <NavDropdown.Item href="#action3">Extensão</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Pesquisa
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    TCC's
                  </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
};

export default NavigationBar;