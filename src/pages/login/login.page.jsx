import React, { useState } from "react";
import {
  LeftSideHeader,
  LoginContainer,
  LoginLeftSideContainer,
  LoginPageContainer,
  LoginRightSideContainer,
  RightSideHeader,
  TopHeader,
  TopHeaderContainer,
} from "./login.styles";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import GoogleButton from "react-google-button";

export default function LoginPage() {
  const [showICInput, setShowICInput] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <LoginPageContainer>
      <TopHeaderContainer className="d-md-none">
        <TopHeader>ResHawk</TopHeader>
      </TopHeaderContainer>
      <LoginContainer>
        <Row noGutters>
          <Col md={4} className="d-none d-md-block d-lg-block d-xl-block">
            <LoginLeftSideContainer>
              <LeftSideHeader>ResHawk</LeftSideHeader>
            </LoginLeftSideContainer>
          </Col>
          <Col md={8}>
            <LoginRightSideContainer>
              {loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  id="loading-spinner"
                />
              ) : showICInput ? (
                <>
                  <RightSideHeader>Enter your invite code.</RightSideHeader>
                  <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Invite code goes here..."
                        id="invite-code-input"
                      />
                      <Form.Control
                        type="submit"
                        id="submit-button"
                        className="btn btn-primary"
                      />
                    </Form.Group>
                  </Form>
                </>
              ) : (
                <>
                  <RightSideHeader>
                    Login with your Miami account.
                  </RightSideHeader>
                  <GoogleButton type="light" />
                </>
              )}
            </LoginRightSideContainer>
          </Col>
        </Row>
      </LoginContainer>
    </LoginPageContainer>
  );
}
