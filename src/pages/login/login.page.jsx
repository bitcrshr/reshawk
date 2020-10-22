import React from "react";

import { onLoginClick } from "./login.utils";

const LoginPage = () => (
  <div>
    <button onClick={onLoginClick}>Sign In With Google</button>
  </div>
);

export default LoginPage;
