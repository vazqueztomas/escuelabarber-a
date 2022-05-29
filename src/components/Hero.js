import { Stack, Text, Image, Box } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack direction={["column-reverse", "column", "row"]} marginX = {10}>
      <Stack className="text" direction={"column"}>
        <Text fontSize={"4xl"}>
          Queres desarrollar y transformar tu futuro?{" "}
        </Text>
        <Text fontSize={"xl"}>
          Comenzá con esta maravillosa profesión de ser barbero/a. Dale un giro
          a tu vida y aprendé en esta industria que no tiene límites.
        </Text>
      </Stack>
      <Box >
        <Image src="https://blog.agendapro.com/hubfs/Barberia.png" alt="Hero" borderRadius={4} width = {780} />
      </Box>
    </Stack>
  );
}
