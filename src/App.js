import React from "react";
import "./App.css";

import LoginPage from "./pages/login/login.page";

import { ProvideAuth } from './firebase/firebase.util';

function App() {
  return (
    <ProvideAuth>
      <LoginPage></LoginPage>
    </ProvideAuth>
  );
}

export default App;
