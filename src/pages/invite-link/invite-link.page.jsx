import React, { useState } from "react";
import { useAuth } from "../../firebase/firebase.util";
import { verifyInviteCode } from "../../firebase/invite-manager";

import {
  PageContainer,
  CodeContainer,
  BackButton,
  ContainerText,
} from "./invite-link.styles";

const InviteLinkPage = () => {
  const auth = useAuth();
  const [inviteCode, setInviteCode] = useState();

  const handleSubmit = (event) => {
    verifyInviteCode(inviteCode, auth.state.dbUser.id);

    event.preventDefault();
  };

  const handleChange = (event) => {
    setInviteCode(event.target.value);
  };

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
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
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
