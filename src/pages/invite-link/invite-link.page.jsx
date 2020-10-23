import React from "react";
import { useAuth } from "../../firebase/firebase.util";

import { PageContainer, CodeContainer } from "./invite-link.styles";

const InviteLinkPage = () => {
  const auth = useAuth();

  const unauthorizedUI = () => (
    <div>
      <h3>
        Whoa! We don't have you in our system. Contact your RA or supervisor!
      </h3>
      <button onClick={auth.signOut}>Go Back</button>
    </div>
  );

  const authorizedUI = () => (
    <div>
      <h3>Hey there, {auth.user.displayName}! We've been expecting you.</h3>
      <button onClick={auth.signOut}>Go Back</button>
    </div>
  );

  console.log(auth.user);

  return (
    <PageContainer>
      <CodeContainer>
        {auth.authorized ? authorizedUI() : unauthorizedUI()}
      </CodeContainer>
    </PageContainer>
  );
};

export default InviteLinkPage;
