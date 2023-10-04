import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function NavBarBasic() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="https://iansnyder333.github.io/frontend/">Ian Snyder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Portfolio</Link>
            <Link className="nav-link" to="/credentials">Credentials </Link>
            <Link className="nav-link" to="/todos">To-Do </Link>

            


            <NavDropdown className="ml-auto" title="Contact Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/iandsnyder">Linkedin</NavDropdown.Item>
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
/*                             <!-- Uncommited Changes --!>
            <NavDropdown className="ml-auto" title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects">Task1</NavDropdown.Item> ? Java
              <NavDropdown.Item href="/projects">Task2</NavDropdown.Item> ? Python
              <NavDropdown.Item href="/projects">Task3</NavDropdown.Item> ? C++ or Data Engineering
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects">Task 4</NavDropdown.Item> ? Full portfolio
            </NavDropdown>
          */
export default NavBarBasic;