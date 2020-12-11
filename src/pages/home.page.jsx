import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import CustomNavbar from "../components/navbar.component";

export default function HomePage() {
  return (
    <Container fluid className="mx-0 px-0">
      <CustomNavbar />

      <Jumbotron className="mx-2">
        <h1>Students first.</h1>
        <p>
          ResHawk is specially tailored for university students living in
          residence halls and the staff that support them.
        </p>
      </Jumbotron>
    </Container>
  );
}
