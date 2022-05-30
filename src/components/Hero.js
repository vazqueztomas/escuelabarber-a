import { Stack, Image, Box, } from "@chakra-ui/react";
import Boton from "./Boton";
import {Link} from 'react-router-dom';
import Titulo from "./Titulo";
import Subtitulo from "./Subtitulo";

export default function Hero(props) {
  return (
    <Stack direction={["column-reverse", "column", "row"]} marginX={[10]}>
      <Stack
        className="text"
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={[2,2,6]}
        paddingX={[0,0,10]}
      >
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
