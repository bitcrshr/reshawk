import React from "react";
import {
  SidebarItem,
  ContentContainer,
  DashboardContainer,
  SidebarContainer,
  SidebarBrand,
} from "./dashboard.styles";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <SidebarContainer>
        <SidebarBrand>ResHawk</SidebarBrand>
        <SidebarItem active>Home</SidebarItem>
        <SidebarItem>My RAs</SidebarItem>
        <SidebarItem>Residents</SidebarItem>
        <SidebarItem>Hall events</SidebarItem>
        <SidebarItem>Settings</SidebarItem>
      </SidebarContainer>
      <ContentContainer>
        <Container fluid className="h-100 d-flex flex-column">
          <Row className="p-0">
            <Col md={4}>
              <Row>
                <Col>
                  <Card className="db-leftcard-1 mx-0">
                    <h1>left 1</h1>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="db-leftcard-2 mx-0">
                    <h1>left 2</h1>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col className="d-flex flex-column pl-0">
              <Card className="db-rightcard flex-grow-1 mx-0">
                <h1>right card</h1>
              </Card>
            </Col>
          </Row>
          <Row className="flex-grow-1">
            <Col className="d-flex flex-column">
              <Card className="db-bottomcard flex-grow-1 mx-0">
                <h1>bottom card</h1>
              </Card>
            </Col>
          </Row>
        </Container>
      </ContentContainer>
    </DashboardContainer>
  );
}
