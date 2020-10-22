import { signInWithGoogle, db } from "../../firebase/firebase.util";

export const onLoginClick = () => {
  signInWithGoogle()
    .then(function (result) {
      var user = result.user;

      //we only want to query the DB if it's a Miami email.
      if (isMiamiEmail(user.email)) {
        isAuthorizedUser(user.email).then((auth) =>
          console.log(`Authorized user? ${auth}`)
        );
      }
    })
    .catch(function (error) {
      console.log(
        `Error code: ${error.code} \nError message: ${error.message}`
      );
    });
};

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
