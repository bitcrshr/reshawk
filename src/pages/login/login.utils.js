import { db } from "../../firebase/firebase.util";




export const isMiamiEmail = (email) => {
  return (
    email.substring(email.length - 12, email.length).toLowerCase() ===
    "@miamioh.edu"
  );
};

export const isAuthorizedUser = async (email) => {
  const snapshot = await db
    .collection("authorized-users")
    .where("email", "==", email)
    .get();

  return !snapshot.empty;
};
