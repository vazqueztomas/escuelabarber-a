import { Button, Text } from "@chakra-ui/react";

import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Link } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9zRE2sXrXypQmhADDMTgMGgsV-wkJMoo",
  authDomain: "benescuela.firebaseapp.com",
  projectId: "benescuela",
  storageBucket: "benescuela.appspot.com",
  messagingSenderId: "873647576642",
  appId: "1:873647576642:web:0a4be73f49441c331ebfdb",
  measurementId: "G-CK0S5TRTCN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//firebase
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default function ModalLogin() {
  const [logeado, setLogeado] = useState(false);
  // verificamos si esta logeado o deslogeado
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("uid", uid);
      logeado = setLogeado(true)
    } else {
      console.log("Usuario deslogeado");
      logeado = setLogeado(false)
    }
  });
  return logeado ? <Button><Link to = "/cursobarberia.html">Ir al curso</Link></Button> : <ButtonLogin />;
}

const ButtonLogin = () => (
  <Button onClick={loguearUser}>Iniciar sesion con Google</Button>
);

let loguearUser = () => {
  signInWithPopup(auth, provider).then((res) => {
    let logUser = {
      uid: res.user.uid,
      username: res.user.displayName,
      profile_picture: res.user.photoURL,
      email: res.user.email,
    };
    console.log(logUser);
  });

  auth.languageCode = "es";
};

let desloguearUser = () => {
  signOut(auth).then((res) => {
    <ButtonLogin />;
  });
};
