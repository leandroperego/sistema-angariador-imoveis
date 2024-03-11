import { db } from "../firebase-config";
import { collection, addDoc, getDocs} from "firebase/firestore";

const imoveisCollectionRef = collection(db, "imoveis");

export async function addImovel(dadosImovel){
    await addDoc(imoveisCollectionRef, dadosImovel)
        .then(() => {
            alert("Imóvel adicionado com sucesso!");
            return true;
        })
        .catch((error) => {
            alert("Erro ao adicionar imóvel: " + error)
            return false;
        })
}

export async function getImoveis(){

    let listaComId = [];

    await getDocs(imoveisCollectionRef)
        .then((response) => {
            response.forEach((doc) => {
                listaComId.push({id: doc.id ,...doc.data()});
            })

        })
        .catch((error) => {
            alert("Erro ao recuperar dados dos imoveis: " + error);
        })

    return listaComId;

}