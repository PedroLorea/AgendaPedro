// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyArqlB4zTvqxn2g1JdjTlWGRe0KJNLgXm4",
  authDomain: "agendapedro-f8d0b.firebaseapp.com",
  projectId: "agendapedro-f8d0b",
});

const db = getFirestore(firebaseApp);
const postCollectionRef = collection(db, "PostIts")


export const getPostIts = (callback) => {
  return onSnapshot(postCollectionRef, (snapshot) => {
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
