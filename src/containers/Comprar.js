
import { Box, Stack, Image,   } from "@chakra-ui/react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Ofrecemos from "../components/sections/Ofrecemos";
import SubText from "../components/SubText";
import Subtitulo from "../components/Subtitulo";
import Titulo from "../components/Titulo";




export default function Comprar() {
  return (
    <>
      <Header></Header>
      <Stack direction={["column-reverse", "column", "row"]} marginX={[10]}>
      <Stack
        className="text"
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={[2,2,6]}
        paddingX={[0,0,10]}
      > 
        <SubText subtext= "Confiá en vos."></SubText>
        <Titulo titulo = "Tu aventura comienza ahora. Cambiá tu futuro."></Titulo>
        <Subtitulo subtitulo = "Con nuestro curso podes cambiar tu futuro y el estilo de todos los demás. No te lo podés perder."></Subtitulo>
        
      </Stack>
      <Box>
        <Image
          src="https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/960x640-cerini-2.png"
          alt="Hero"
          borderRadius={4}
          width={780}
        />
      </Box>
    </Stack>
      <Ofrecemos/>
      <Footer></Footer>
      
    </>
  );
}
