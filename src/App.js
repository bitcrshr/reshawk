import React from "react";
import "./App.css";

import LoginPage from "./pages/login/login.page";

import { useAuth } from "./firebase/firebase.util";
import InviteLinkPage from "./pages/invite-link/invite-link.page";

function App() {
  const auth = useAuth();

  return auth.state.user ? <InviteLinkPage /> : <LoginPage />;
}

export default App;
