import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import { useAuth } from "./firebase/firebase.util";
import { Alert, Fade } from "react-bootstrap";

import ReshawkNavbar from "./components/reshawk-navbar/reshawk-navbar.component";
import InviteCodeModal from "./components/invite-code-modal/invite-code-modal.component";
import PageContainer from "./components/page-container/page-container.styles";

import HomePage from "./pages/home/home.page";

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

  return (
    <BrowserRouter>
      <PageContainer>
        <ReshawkNavbar />
        {alert}
        <InviteCodeModal showModal={showModal} setShowModal={setShowModal} />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
