import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBV62-CTYEfLltU5dK-rhyGMp7NUJZFp8s",
  authDomain: "crown-clothing-db-f510d.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-f510d.firebaseio.com",
  projectId: "crown-clothing-db-f510d",
  storageBucket: "crown-clothing-db-f510d.appspot.com",
  messagingSenderId: "149284326422",
  appId: "1:149284326422:web:9208d99976927df57cf937",
  measurementId: "G-Q6WYF1N5M6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message); 
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
