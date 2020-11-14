import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/home.page";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PageContainer from "./components/page-container/page-container.styles";
import Dropdown from "react-bootstrap/Dropdown";
import GoogleButton from "react-google-button";
import { useAuth, context } from "./firebase/firebase.util";
import { Alert, Button, Toast } from "react-bootstrap";

const App = () => {
  const [alert, setAlert] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    if (auth.state.user && !auth.state.isAuthorized)
      setAlert(
        <Alert variant="danger" dismissible onClose={() => setAlert(null)}>
          Looks like you tried to sign in with a non-Miami account. Try again
          with your Miami account.
        </Alert>
      );
    else setAlert(null);
  }, [auth.state.isAuthorized, auth.state.user]);

  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar bg="light" expand={true}>
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
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
