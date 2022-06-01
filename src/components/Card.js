import { Stack, Text, Image, Link } from "@chakra-ui/react";
import Boton from "./Boton";

export default function Card(props) {
  let color = "#ECC94B";
  return (
    <Stack
      border={`4px solid ${color}`}
      w={[230, 380]}
      alignItems={"center"}
      borderRadius={8}
      p={8}
    >
      <Image
        src="https://i.pinimg.com/originals/a9/40/92/a9409281fa230ecd40b7f6e5f0594159.jpg"
        w={200}
        borderRadius={12}
      ></Image>
      <Text fontWeight={"bold"} fontSize={20}>
        {props.titulo}
      </Text>
      <Text fontSize={15}>{props.subtitulo}</Text>
      <Link
        href="https://mpago.la/2y3sBEb"
        isExternal
      >
        <Boton textContent={props.precio}></Boton>
      </Link>
    </Stack>
  );
}
