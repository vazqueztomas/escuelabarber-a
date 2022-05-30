import { Stack, Text, Image } from "@chakra-ui/react";
import Boton from "./Boton";
export default function Card(props) {
  return (
    <Stack
      border={"1px solid black"}
      w={380}
      alignItems={"center"}
      borderRadius={8}
    >
      <Image
        src="https://i.pinimg.com/originals/a9/40/92/a9409281fa230ecd40b7f6e5f0594159.jpg"
        w={200}
      ></Image>
      <Text fontWeight={"bold"} fontSize={20}>
        {props.titulo}
      </Text>
      <Text fontSize={15}>{props.subtitulo}</Text>
      <Boton textContent={props.precio}></Boton>
    </Stack>
  );
}
