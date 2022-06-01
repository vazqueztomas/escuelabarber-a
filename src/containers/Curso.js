import { Stack, Text } from "@chakra-ui/react";
import ListadoVideos, { VerificaUser } from "../components/ListadoVideos";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export default function Curso(props) {
  
    VerificaUser();
  
  return (
    <>
      <Header></Header>
        <Text mx={12} fontSize={"3xl"}>Contenido</Text>
        <Text mx={12} fontSize={"xl"}>El siguiente curso de barbería tiene varios videos explicativos de cortes, y se debe realizar en forma ordenada para adquirir bien los conceptos</Text>
        <Stack justifyContent={["center"]} alignItems={["center"]} py={12}>
          <ListadoVideos />
      </Stack>
      <Footer></Footer>
    </>
  );
}
