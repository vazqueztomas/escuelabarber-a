import { Stack, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {desloguearUser, loguearUser } from "./Autenticacion";
import MyMenu from "./Menu";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { VerificaUser } from "./ListadoVideos";

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

//firebase
const auth = getAuth();

export default function BarraNavegacion() {
  const [estado, setEstado] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log("uid", uid);
      setEstado(true);
    } else {
      // console.log("Usuario deslogeado");
      setEstado(false)
    }
  })
  return (
    <Stack
      direction={"row"}
      justifyContent={["space-between"]}
      alignItems={"center"}
      marginY={[2, 6]}
      marginX={[0, 2, 6]}
      py={[2,2,0]}
      px={4}
    >
      <Link to="/">
        <Stack direction={"row"} textAlign={"start"} alignItems={"center"} >
          <Image
            src="https://reservaturno.com/img/icono-barberia.png"
            boxSize={"30px"}
            
          ></Image>
          <Text fontWeight={"bold"} fontSize={["sm"]}>
            Barberia "El negrito"
          </Text>
        </Stack>
      </Link>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={[2,2,8]}
        justifyContent={"center"}
      >
        
        {estado ? (
          <>
          <MyMenu />
          <Button colorScheme="yellow.500" borderColor = {"none"} variant = {"outline"} onClick={desloguearUser}>
            Cerrar sesión
          </Button>
          </>
        ) : (
          <Button colorScheme="yellow" borderColor = {"none"}  variant = {"outline"}onClick={loguearUser}>
            Iniciar sesión
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
