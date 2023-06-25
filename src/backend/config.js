// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";

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

export function obterFraseAnterior(idAtual){
  const indexAtual = frases.findIndex((doc) => doc.id === idAtual)
  const anteriorIndex = indexAtual - 1

  if(anteriorIndex >= 0 && anteriorIndex < frases.length) return frases[anteriorIndex]
}

export function obterProximaFrase(idAtual){
  const indexAtual = frases.findIndex((doc) => doc.id === idAtual)
  const proximoIndex = indexAtual + 1

  if(proximoIndex >= 0 && proximoIndex <= frases.length) return frases[proximoIndex]
}
