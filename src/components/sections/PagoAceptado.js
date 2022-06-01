import { Text, Button,  Link, Stack } from "@chakra-ui/react";
import Subtitulo from "../Subtitulo";

export default function PagoAceptado() {
  return (
    <>
      <Stack
        maxWidth={"75ch"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Text color="green" fontSize={["3xl", "4xl"]} fontWeight={"bolder"}>
          Pago aceptado!
        </Text>
        <Subtitulo subtitulo="Por favor, te pedimos que nos envíes tu mail (con el que te registraste) así podremos habilitarte el curso en la página. Muchas gracias por confiar!"></Subtitulo>
        <Link href="https://wa.me/5492324681817">
          <Button colorScheme={"green"}>ENVIAR MAIL ACÁ</Button>{" "}
        </Link>
      </Stack>
    </>
  );
}
