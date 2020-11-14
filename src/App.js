import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/home.page";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PageContainer from "./components/page-container/page-container.styles";
import Dropdown from "react-bootstrap/Dropdown";
import GoogleButton from "react-google-button";
import { useAuth, context } from "./firebase/firebase.util";
import { Alert, Button, Fade, Form, Modal } from "react-bootstrap";
import { verifyInviteCode } from "./firebase/invite-manager";

const App = () => {
  const [alert, setAlert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    if (auth.state.user && !auth.state.isMiamiUser)
      setAlert(
        <Alert
          variant="danger"
          dismissible
          transition={Fade}
          onClose={() => setAlert(null)}
        >
          Whoa! Looks like you tried to sign in to a non-Miami Google account.
          Sign out and try again with a Miami account!
        </Alert>
      );
    else setAlert(null);

    if (auth.state.isMiamiUser && !auth.state.dbUser) {
      setShowModal(true);
    }
  }, [auth.state.user, auth.state.isMiamiUser, auth.state.dbUser]);

  const handleModalCancel = () => {
    auth.signOut();
    setShowModal(false);
  };

  const handleSubmit = () => {
    verifyInviteCode();
  };

  return (
    <BrowserRouter>
      <PageContainer>
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
        {alert}
        <Modal
          show={showModal}
          onHide={handleModalCancel}
          backdrop="static"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Verification Time!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Welcome to reshawk! We've been expecting you. All you need to do
              to get started is enter the invite code you were sent!
            </p>
            <Form id="invite-form" onSubmit={handleSubmit}>
              <Form.Control type="text" placeholder="Invite Code" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleModalCancel}>
              Nevermind!
            </Button>
            <Button variant="primary" type="submit" form="invite-form">
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
