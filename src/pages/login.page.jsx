import React from "react";
import GoogleButton from "react-google-button";

import CustomNavbar from "../components/navbar.component";
import PageContainer from "../components/page-container.component";
import { useAuth } from "../hooks/auth";

export default function LoginPage() {
  const auth = useAuth();
  return (
    <PageContainer>
      <CustomNavbar />
      <GoogleButton onClick={auth.signIn} />
    </PageContainer>
  );
}
