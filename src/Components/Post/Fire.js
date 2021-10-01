import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSrQUkS_vtn5L5cXMDB74MvBG0ZZGBl3c",
  authDomain: "upload-testing-45768.firebaseapp.com",
  databaseURL: "https://upload-testing-45768-default-rtdb.firebaseio.com",
  projectId: "upload-testing-45768",
  storageBucket: "upload-testing-45768.appspot.com",
  messagingSenderId: "526942761611",
  appId: "1:526942761611:web:1b32c02d18b4670fb01a8e",
  measurementId: "G-1ND1412HZ2"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage} ;