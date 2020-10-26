import { db } from "./firebase.util";

export const generateInviteCode = () => {
  return Math.random().toString(36).substring(2, 11);
};

export function verifyInviteCode(code, userID) {
  db.collection("authorized-users")
    .where("inviteCode", "==", code)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log("invalid code");
        return;
      }

      if (snapshot.docs[0].data().invitedUsers.includes(userID.trim())) {
        console.log("invite code verified");
      } else {
        console.log("invalid code");
      }
    })
    .catch((error) => console.log(error));
}
