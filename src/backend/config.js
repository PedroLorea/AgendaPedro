// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc, deleteDoc, doc, updateDoc, onSnapshot, getDocs } from "firebase/firestore";
import { query, orderBy, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyArqlB4zTvqxn2g1JdjTlWGRe0KJNLgXm4",
  authDomain: "agendapedro-f8d0b.firebaseapp.com",
  projectId: "agendapedro-f8d0b",
});

const db = getFirestore(firebaseApp);


//POST-ITS

const postCollectionRef = collection(db, "PostIts")

export const getPostIts = (callback) => {
  return onSnapshot(query(postCollectionRef, orderBy("timestamp")), (snapshot) => {
    const updatedPostIts = snapshot.docs.map((doc) => {
      console.log("At config.ts:" + doc.data().texto)
      return {
        id: doc.id,
        texto: doc.data().texto
      }
    })
    callback(updatedPostIts)
  })

}

export const createPostIt = async (postItData) => {
  try {
    await addDoc(postCollectionRef, postItData)
  }
  catch (error) {
    console.error("Error adding post it:", error);
  }
}

export const deletePostIt = async (id) => {
  const postItDocRef = doc(db, "PostIts", id)
  await deleteDoc(postItDocRef)
}

export const updatePostIt = async (id, texto) => {
  const postItDocRef = doc(db, "PostIts", id)
  await updateDoc(postItDocRef, texto)
}

//TO-DO LIST

const toDoCollectionRef = collection(db, "Todo")

export const createToDo = async (toDoData) => {
  try{
    await addDoc(toDoCollectionRef, toDoData)
  } catch (error) {
    console.error("Error adding post it:", error)
  }
}

export const getToDo = (callback) => {
  return onSnapshot(query(toDoCollectionRef, orderBy('timestamp')), (snapshot) => {
    const updatedToDo = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        tarefa: doc.data().tarefa
      }
    })
    callback(updatedToDo)
  })
}

export const removeTodo = async (id) => {
  try {
    const toDoDocRef = doc(db, "Todo", id);
    await deleteDoc(toDoDocRef, id)
  } catch (error) {
    console.error("Error deleting post it:", error)
  }

}


// FRASES

const frasesCollectionRef = collection(db, "Frases");
const frases = []

export function getFrases(callback) {
  return onSnapshot(query(frasesCollectionRef, orderBy('id')), (snapshot) => {

    snapshot.forEach((doc) => {
      frases.push(doc.data())
      console.log(doc.data())
    })
    callback(frases)
  })

}

export function obterProximaFrase(idAtual){
  const indexAtual = frases.findIndex((doc) => doc.id === idAtual)
  const proximoIndex = indexAtual + 1

  if(proximoIndex >= frases.length) return frases[0]
  if(proximoIndex >= 0 && proximoIndex <= frases.length) return frases[proximoIndex]
}


//OBJETIVOS

const objetivosCollectionRef = collection(db, "Objetivos");

export const createObjective = async (objetivo) => {
  try {
    await addDoc(objetivosCollectionRef, objetivo)
  }
  catch(error){
    console.log('Erro ao adicionar Objetivo' + error)
  }
}

export const getObjetivoBack = async (id) => {
  try {
    const querySnapshot = await getDocs(objetivosCollectionRef);
    let objetivoEncontrado = null

    querySnapshot.forEach((doc) => {
      const objetivo = doc.data();
      if (objetivo.id === id) {
        objetivoEncontrado = objetivo
      }
    });

    return objetivoEncontrado
  } catch (error) {
    console.log('Erro ao buscar Objetivo: ' + error);
  }
};


export const updateObjective = async (objetivo) => {
  const objetivosCollectionRef = collection(db, "Objetivos");
  
  const q = query(objetivosCollectionRef, where("id", "==", objetivo.id));
  
  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    const objetivoDocRef = doc(db, "Objetivos", querySnapshot.docs[0].id);
    await updateDoc(objetivoDocRef, {
      titulo: objetivo.titulo,
    dadosFazer: objetivo.dadosFazer,
    dadosImpede: objetivo.dadosImpede
    });
  } else {
    console.log("Nenhum objetivo encontrado com o nome fornecido.");
  }
}


