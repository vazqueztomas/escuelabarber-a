import { Stack, Text } from "@chakra-ui/react";
import ListadoVideos from "../components/ListadoVideos";
import Header from "../components/sections/Header";
import Subtitulo from "../components/Subtitulo";
import Titulo from "../components/Titulo";

export default function Curso(props) {
  return (
    <Stack>
        <Header></Header>
      <Titulo titulo = "Contenido"></Titulo>
      <Subtitulo subtitulo = "El siguiente curso de barbería tiene varios videos explicativos de cortes, y se debe realizar en forma ordenada para adquirir bien los conceptos"></Subtitulo>
      <Stack justifyContent={"center"} alignItems={"center"} py={12}>
          <ListadoVideos/>
      </Stack>
    </Stack>
  );
}
