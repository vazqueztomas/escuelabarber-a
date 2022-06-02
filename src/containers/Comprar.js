
import { Box, Stack, Image,  Text, List, ListItem, UnorderedList } from "@chakra-ui/react";
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
      
      <Stack>
        <SubText subtext = 'Mas de 15 horas de videos, y teoría que acompaña.'></SubText>
        <Titulo titulo = "Te ofrecemos posibilidades"></Titulo>
        
        <Stack px={6} justifyContent={"space-around"} alignItems={"center"} direction={["column-reverse","column", "row"]}>
          <UnorderedList textAlign={"start"}>
          <ListItem fontSize={20}>Más de 15 videos explicativos.</ListItem>          
          <ListItem fontSize={20}>Teoría explicativa cada clase.</ListItem>
          <ListItem fontSize={20}> Posibilidad de comunicación con el profesor a cargo.</ListItem>
          <ListItem fontSize={20}> Obtenés el curso de por vida, incluídas sus actualizaciones.</ListItem>
          </UnorderedList>
        <Box maxW={[720, 320]} >
          <Image src = "https://fondosmil.com/fondo/64240.jpg" borderRadius={8}></Image>
        </Box>
        </Stack> 
      </Stack>


      <Footer></Footer>
      
    </>
  );
}
