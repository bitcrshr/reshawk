import { db } from "./firebase.util";

export const generateInviteCode = () => {
  return Math.random().toString(36).substring(2, 11);
};

export async function verifyInviteCode(code, user) {
  if (!code) {
    return false;
  }

  const inviteCodeSnap = await db.collection("invite-codes").doc(code).get();
  const inviteCodeOwnerSnap = await db
    .collection("authorized-users")
    .doc(inviteCodeSnap.data().assignedTo)
    .get();

  if (!inviteCodeSnap.data()) {
    return false;
  }

  const newUserRef = await db.collection("authorized-users").add({
    email: user.email,
    hall: inviteCodeOwnerSnap.data().hall,
    name: user.displayName,
    role: inviteCodeSnap.data().forRole,
  });

  const newCurrentUsers = !inviteCodeSnap.data().currentUsers
    ? [newUserRef.id]
    : [...inviteCodeSnap.data().currentUsers, newUserRef.id];

  console.log(newCurrentUsers);

  db.collection("invite-codes").doc(code).update({
    currentUsers: newCurrentUsers,
  });

  return true;
}
