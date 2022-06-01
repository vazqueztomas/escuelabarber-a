import { Stack, Image, Box, } from "@chakra-ui/react";
import Boton from "./Boton";
import {Link} from 'react-router-dom';
import Titulo from "./Titulo";
import Subtitulo from "./Subtitulo";
import SubText from "./SubText";

export default function Hero(props) {
  return (
    <Stack direction={["column-reverse", "column", "row"]} marginX={[10]}>
      <Stack
        className="text"
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={[2,2,4]}
        paddingX={[0,0,10]}
      >
        <SubText subtext = "Mejora tus habilidades cambiando tu vida."></SubText>
        <Titulo titulo = {props.titulo}></Titulo>
        <Subtitulo subtitulo = {props.subtitulo}></Subtitulo>
        <Link to={"/comprar.html"}>
          <Boton textContent = {props.textContent}></Boton>
        </Link>
      </Stack>
      <Box>
        <Image
          src={props.image}
          alt="Hero"
          borderRadius={4}
          width={780}
        />
      </Box>
    </Stack>
  );
}
