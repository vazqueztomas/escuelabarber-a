import { Text, Stack } from "@chakra-ui/react";

export default function Footer() {
  let background = "#1A202C";
  let letterMin = "#838C95";
  return (
    <Stack
      backgroundColor={background}
      direction={["column", "column","row"]}
      justifyContent={"space-around"}
      py={6}
      mt={12}
      pl={[3]}
    >
      <Stack textAlign={"start"}>
        <Text fontSize={["sm","md"]} color={"white"} fontWeight={"bolder"}>
          ESCUELA "EL NEGRITO" - BARBERIA
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Ayuda
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Contacto
        </Text>
      </Stack>
      <Stack textAlign={"start"}>
        
        <Text fontSize={["sm","md"]} color={"white"} fontWeight={"bolder"}>
          BARBERIA 'EL NEGRITO'
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Empresa
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Legal
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Políticas de privacidad
        </Text><Text fontSize={"sm"} color={letterMin}>
        Términos de servicio
      </Text>
      </Stack>
      
      <Stack direction={"row"}>
        <Text fontSize={"sm"} color={letterMin}>
          Instagram
        </Text>

        <Text fontSize={"sm"} color={letterMin}>
          Github
        </Text>
      </Stack>
    </Stack>
  );
}
