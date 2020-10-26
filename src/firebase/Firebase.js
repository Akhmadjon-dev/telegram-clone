import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTaFP9hvM2jgMocyrlPgsXQU0boiXkcP0",
  authDomain: "telegram-clone-b3537.firebaseapp.com",
  databaseURL: "https://telegram-clone-b3537.firebaseio.com",
  projectId: "telegram-clone-b3537",
  storageBucket: "telegram-clone-b3537.appspot.com",
  messagingSenderId: "273712580788",
  appId: "1:273712580788:web:0d9f15eb2917f5ca9d2fe1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
