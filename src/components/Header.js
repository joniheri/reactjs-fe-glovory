import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow Container"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          GLOVORY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Tentang
            </Nav.Link>
            <NavDropdown title="Wisata" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/wisata">
                Wisata 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wisata">
                Wisata 2
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wisata">
                Wisata 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Lainnya</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="right">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
