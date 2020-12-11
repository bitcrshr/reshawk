import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">ResHawk</Navbar.Brand>
      <Navbar.Toggle aria-control="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login" active={location.pathname === "login"}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
