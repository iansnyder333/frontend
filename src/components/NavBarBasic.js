import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarBasic() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ian Snyder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Contact Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/ian-snyder-aa1600182/">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/iansnyder333">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/iansnydes?s=11&t=nH0dMGEkXPcP6bshx_BZ7w">Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <a class="dropdown-item" href="mailto: idsnyder136@gmail.com">Email</a>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBasic;