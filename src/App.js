import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import "./App.css";
import LoginPage from "./pages/login.page";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
