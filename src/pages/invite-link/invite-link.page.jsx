import React from "react";
import { useAuth } from "../../firebase/firebase.util";

import {
  PageContainer,
  CodeContainer,
  BackButton,
  ContainerText,
} from "./invite-link.styles";

const InviteLinkPage = () => {
  const auth = useAuth();

  const unauthorizedUI = () => (
    <div>
      <ContainerText>
        Whoa! We don't have you in our system. Contact your RA or supervisor!
      </ContainerText>
      <BackButton onClick={auth.signOut}>Go Back</BackButton>
    </div>
  );

  const authorizedUI = () => (
    <div>
      <ContainerText>Welcome! We've been expecting you.</ContainerText>
      <BackButton onClick={auth.signOut}>Go Back</BackButton>
    </div>
  );

  return (
    <PageContainer>
      <CodeContainer>
        {auth.state.isAuthorized ? authorizedUI() : unauthorizedUI()}
      </CodeContainer>
    </PageContainer>
  );
};

export default InviteLinkPage;
