import { Image, Stack, Text, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
export default function Elegirnos() {
  return (
    <Stack
      paddingY={"20px"}
      direction={["column", "column", "row"]}
      spacing={8}
    >
      <Image
        src="https://fondosmil.com/fondo/64240.jpg"
        alt="barbería-elegirnos"
        maxWidth={"680px"}
        w={"100%"}
      ></Image>
      <Stack direction={"column"} spacing={4} paddingX={2}>
        <Text
          fontSize={"5xl"}
          color={"#ECC94B"}
          backgroundColor={"black"}
          py={1}
          px={3}
          fontWeight={"bold"}
        >
          TRABAJÁ DE LO QUE TE GUSTA
        </Text>
        <Text fontSize={"xl"} paddingX={20}>
          La barbería está en demanda continuamente y la gente{" "}
          <strong>SIEMPRE</strong> se va a cortar el pelo, así que trabajo no va
          a faltar.
        </Text>
        <Text fontSize={"2xl"}>¿Que estás esperando?</Text>
        <Link to="comprar.html">
          {" "}
          <Button colorScheme={"yellow"} size={"lg"}>
            ADQUIRÍ NUESTRO CURSO
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
