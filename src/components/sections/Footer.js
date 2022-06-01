import { Text, Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
export default function Footer() {
  let background = "#1A202C";
  let letterMin = "#838C95";
  return (
    <Stack
      backgroundColor={background}
      direction={["column", "column", "row"]}
      justifyContent={"space-around"}
      py={6}
      mt={12}
      pl={[3]}
    >
      <Stack textAlign={"start"}>
        <Text fontSize={["sm", "md"]} color={"white"} fontWeight={"bolder"}>
          ESCUELA "EL NEGRITO" - BARBERIA
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Ayuda
        </Text>
        <Link href="https://instagram.com/elnegrito.bshop">
          <Text fontSize={"sm"} color={letterMin}>
            Contacto
          </Text>
        </Link>
      </Stack>
      <Stack textAlign={"start"}>
        <Text fontSize={["sm", "md"]} color={"white"} fontWeight={"bolder"}>
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
        </Text>
        <Text fontSize={"sm"} color={letterMin}>
          Términos de servicio
        </Text>
      </Stack>

      <Stack direction={"row"}>
        <Link href="https://instagram.com/elnegrito.bshop">
          <Text fontSize={"sm"} color={letterMin}>
            Instagram
          </Text>
        </Link>
        <Link href="https://github.com/vazquezcabj21">
          <Text fontSize={"sm"} color={letterMin}>
            Github
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
}
