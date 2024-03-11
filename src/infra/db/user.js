import { db, auth } from "../firebase-config";
import { collection, setDoc, doc, getDoc} from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

export const addDataUser = async (userWithId) => {

    const userRef = doc(usersCollectionRef, userWithId.id);
    await setDoc(userRef, {
        nome: userWithId.first,
        sobrenome: userWithId.last,
    })
    .then(() => {
        return true;
    })
    .catch((error) => {
        alert("Erro ao adicionar usuário: " + error);
        return false;
    })
}

export const getDataUserWithId = async (uid) => {
    const docRef = doc(usersCollectionRef, uid);

    const documento = (await getDoc(docRef)).data();
    const dadosLogin = await auth.currentUser;
    const userData = {
        id: uid,
        nome: documento.nome,
        sobrenome: documento.sobrenome,
        email: dadosLogin.email,
    }

    return userData;
}