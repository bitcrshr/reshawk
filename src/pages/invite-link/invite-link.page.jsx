import React from "react";
import { useAuth } from "../../firebase/firebase.util";

const InviteLinkPage = () => {
  const auth = useAuth();

  if (!auth.authorized) {
    return (
      <div>
        <h1>you are not authorized</h1>
        <button onClick={auth.signOut}>sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>you ARE authorized</h1>
      <button onClick={auth.signOut}>sign out</button>
    </div>
  );
};

export default InviteLinkPage;
