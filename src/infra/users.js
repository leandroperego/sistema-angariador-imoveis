import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDataUser, getDataUserWithId } from "../infra/db/user.js";

export const registerUser = async (user) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (userCredential) => {
            const registerUser = userCredential.user;
            await addDataUser({id: userCredential.user.uid, ...user});
            return registerUser;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            return null;
        });
}

export const toConnect = async (email, password) => {

    let userConnect = null;

    await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            userConnect = await getDataUserWithId(userCredential.user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)

            if (errorCode === "auth/invalid-credential") {
                alert("Email e/ou senha inválidos");
            }
            
        });

        return userConnect;
}

export const toDisconnect = () => {
    auth.signOut();
}