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

      <form onSubmit={handleSubmit} className="w3-container">
        <div className="w3-row">
          <input
            type="text"
            onChange={handleChange}
            className="w3-input w3-round w3-twothird"
          />
          <button type="submit" className="w3-button w3-indigo w3-third">
            Submit
          </button>
        </div>
      </form>
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
