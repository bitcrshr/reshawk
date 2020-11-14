import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const HomePage = () => (
  <Container>
    <Row className="justify-content-center">
      <Col>
        <Jumbotron className="my-3">
          <h1>Welcome to reshawk!</h1>
          <p>
            reshawk is an app for Miami students that live on campus and the
            staff that help support them. Sign in to get started!
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
