import { Image, Stack, Text, Button, Box} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import SubText from "../SubText";
export default function Elegirnos() {
  let color = "#ECC94B"
  return (
    <Stack
      paddingY={"20px"}
      direction={["column", "column", "row"]}
      spacing={8}
    >
      <Box>
      <Image
        src="https://fondosmil.com/fondo/64240.jpg"
        alt="barbería-elegirnos"
        width={780}
      ></Image>
      </Box>
      
      <Stack direction={"column"} spacing={4} paddingX={2}>
        <SubText subtext="Es el momento."></SubText>
        <Text
          fontSize={"5xl"}
          color={color}
          py={1}
          px={3}
          fontWeight={"bold"}
        >
          TRABAJÁ DE LO QUE TE GUSTA
        </Text>
        <Text fontSize={"xl"} paddingX={20}>
          La barbería está en demanda continuamente y la gente{" "}
          <Box as = "span" fontWeight={"bolder"} color= {color}>SIEMPRE</Box> se va a cortar el pelo, así que trabajo no va
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
