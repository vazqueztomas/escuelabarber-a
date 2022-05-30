import { Stack, Text, Image, Box, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
export default function Hero() {
  return (
    <Stack direction={["column-reverse", "column", "row"]} marginX={10}>
      <Stack
        className="text"
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={6}
        paddingX={10}
      >
        <Text fontSize={["3xl", "4xl"]}>
          Queres desarrollar y transformar tu futuro?{" "}
        </Text>
        <Text fontSize={"xl"}>
          Comenzá con esta maravillosa profesión de ser barbero/a. Dale un giro
          a tu vida y aprendé en esta industria que no tiene límites.
        </Text>
        <Link to="/comprar.html">
          <Button colorScheme="yellow" size="lg">
            EMPEZÁ YA
          </Button>
        </Link>
      </Stack>
      <Box>
        <Image
          src="https://blog.agendapro.com/hubfs/Barberia.png"
          alt="Hero"
          borderRadius={4}
          width={780}
        />
      </Box>
    </Stack>
  );
}
