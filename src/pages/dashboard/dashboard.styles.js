import styled from "styled-components";
import React, { useState } from "react";

import Hamburger from "hamburger-react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Nav, Navbar } from "react-bootstrap";

export const DashboardContainer = styled.div.attrs((props) => ({
  className: "full-view",
}))`
  background: rgb(62, 62, 255);
  background: linear-gradient(
    158deg,
    rgba(62, 62, 255, 1) 0%,
    rgba(45, 217, 157, 1) 74%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export function CustomNavbar() {
  return (
    <AutoHideNavbar expand="sm">
      <Navbar.Brand>ResHawk</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link active>Overview</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>My RAs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Residents</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Hall Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Settings</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </AutoHideNavbar>
  );
}

const AutoHideNavbar = styled(Navbar).attrs((props) => ({
  bg: "light",
}))`
  position: fixed;
  width: 100%;
  z-index: 2;
  @media screen and (min-width: 998px) {
    position: absolute;
    visibility: hidden;
  }
`;

const CustomNavbarBrand = styled(Navbar.Brand)`
  color: white;
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarBrand>ResHawk</SidebarBrand>
      <Nav>
        <Nav.Item>
          <SidebarItem active>Overview</SidebarItem>
        </Nav.Item>
        <Nav.Item>
          <SidebarItem>My RAs</SidebarItem>
        </Nav.Item>
        <Nav.Item>
          <SidebarItem>Residents</SidebarItem>
        </Nav.Item>
        <Nav.Item>
          <SidebarItem>Hall Events</SidebarItem>
        </Nav.Item>
        <Nav.Item>
          <SidebarItem>Settings</SidebarItem>
        </Nav.Item>
      </Nav>
    </SidebarContainer>
  );
}

export const SidebarContainer = styled.div`
  height: 100%;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 998px) {
    visibility: hidden;
  }
`;

export const ContentContainer = styled.div.attrs((props) => ({
  className: "full-view",
}))`
  margin-left: 300px;

  @media screen and (max-width: 998px) {
    margin-left: 0px;
    margin-top: 50px;
  }
  padding: 7.5px;

  .db-leftcard-1 {
    margin: 7.5px;
    height: 300px;
  }

  .db-leftcard-2 {
    margin: 7.5px;
    height: 300px;
  }

  .db-rightcard {
    margin: 7.5px;
  }

  .db-bottomcard {
    margin: 7.5px;
  }
`;

export const SidebarBrand = styled.h1`
  font-family: "Dancing Script", cursive;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const SidebarItemContainer = styled.div`
  height: 40px;
  width: 300px;

  background-color: ${({ active }) => (active ? "white" : "transparent")};

  cursor: pointer;
`;

const SidebarItemText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  padding-left: 10px;
  padding-top: 5px;
`;

export const SidebarItem = ({ children, active }) => {
  return (
    <SidebarItemContainer active={active}>
      <SidebarItemText>{children}</SidebarItemText>
    </SidebarItemContainer>
  );
};
