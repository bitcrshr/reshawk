import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/home/home.page";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.page";



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
     
    </BrowserRouter>
  );
}

export default App;
