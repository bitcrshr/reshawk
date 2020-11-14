import React from "react";
import { context } from "../../firebase/firebase.util";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

const ReshawkNavbar = () => (
  <Navbar bg="dark" variant="dark" expand={true}>
    <Navbar.Brand as={Link} to="/">
      reshawk
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <context.Consumer>
          {(auth) => {
            if (auth.state.user) {
              return <Button onClick={auth.signOut}>Sign Out</Button>;
            }

            return (
              <Dropdown>
                <Dropdown.Toggle>Sign In</Dropdown.Toggle>
                <Dropdown.Menu id="dropdown-menu">
                  <Dropdown.Header>
                    <p>Sign in with your Miami account</p>
                  </Dropdown.Header>
                  <GoogleButton
                    type="light"
                    className="mx-4"
                    onClick={auth.signIn}
                  />
                </Dropdown.Menu>
              </Dropdown>
            );
          }}
        </context.Consumer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default ReshawkNavbar;
