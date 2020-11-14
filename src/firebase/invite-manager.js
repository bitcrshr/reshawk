import { db } from "./firebase.util";

export const generateInviteCode = () => {
  return Math.random().toString(36).substring(2, 11);
};

export function verifyInviteCode(code, userID) {
  if (!code) {
    return;
  }

  db.collection("invite-codes")
    .doc(code)
    .get()
    .then((snap) => {
      if (snap.empty) {
        console.log("invalid code");
        return;
      }

      console.log("valid code");
    });
}
