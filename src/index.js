import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ProvideAuth } from "./firebase/firebase.util";

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);
