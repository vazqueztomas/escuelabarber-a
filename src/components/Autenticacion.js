
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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



export function loguearUser() {
  signInWithPopup(auth, provider).then((res) => {
    let logUser = {
      uid: res.user.uid,
      username: res.user.displayName,
      profile_picture: res.user.photoURL,
      email: res.user.email,
    };
    // console.log(logUser);
  });
  auth.languageCode = "es";
}

export function desloguearUser() {
  signOut(auth).then((res) => {
    // console.log(res);
  });
}

export default function Autenticacion(props) {
}
