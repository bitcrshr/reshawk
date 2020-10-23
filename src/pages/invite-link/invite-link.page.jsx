import React from "react";
import { useAuth } from "../../firebase/firebase.util";

const InviteLinkPage = () => {
  const auth = useAuth();

  if (auth.authorized === null) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  if (!auth.authorized) {
    return (
      <div>
        <h1>you are not authorized</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>you ARE authorized</h1>
    </div>
  );
};

export default InviteLinkPage;
