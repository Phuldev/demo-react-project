import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar} from "react-bootstrap/";
import {menu} from '../db/db';
console.log(menu);
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand className="logo" as={Link} to="/"><span className="fLogo">aakash</span><span className="lLogo">labs</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menu.map((item) => (
            <Nav.Link as={Link} key={item.id} className="fs-5 fw-semibold menu" to={item.url}>{item.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
