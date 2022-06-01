import { Stack, Text } from "@chakra-ui/react";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export default function Experiencia() {
  return (
    <Stack
      direction={["column", "column", "row"]}
      spacing={10}
      justifyContent={["space-evenly"]}
      alignItems={["center"]}
      marginY={20}
      py={5}
    >
      <Stack wordBreak={"break-word"} maxWidth={"300px"} alignItems={"center"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          backgroundColor={"#ECC94B"}
          color={"black"}
          py={1}
          px={3}
          borderRadius={4}
        >
          <ContentCutIcon sx={{ fontSize: 30 }} />
          <Text fontSize={"xl"} fontWeight={"bolder"}>
            Potencia tus habilidades.
          </Text>
        </Stack>
        <Text>
          Tenemos todas las herramientas necesarias para equipararte con mas
          habilidades para el futuro.
        </Text>
      </Stack>
      <Stack wordBreak={"break-word"} maxWidth={"300px"} alignItems={"center"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          backgroundColor={"#ECC94B"}
          color={"black"}
          px={3}
          py={1}
          borderRadius={4}
        >
          <MenuBookIcon sx={{ fontSize: 30 }} />
          <Text fontSize={"xl"} fontWeight={"bolder"}>
            Aprendé desde cero.
          </Text>
        </Stack>
        <Text>
          Con nuestro índice de videos tenés para empezar y aprender todo lo
          necesario para esta industria.
        </Text>
      </Stack>

      <Stack wordBreak={"break-word"} maxWidth={"300px"} alignItems={"center"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          backgroundColor={"#ECC94B"}
          color={"black"}
          px={3}
          py={1}
          borderRadius={4}
        >
          <OndemandVideoIcon sx={{ fontSize: 30 }} />
          <Text fontSize={"xl"} fontWeight={"bolder"}>
            Manejá tus horarios.
          </Text>
        </Stack>
        <Text>
          Mirá nuestros videos las veces que creas necesarias, en el momento del
          día que te quede más cómodo.
        </Text>
      </Stack>
    </Stack>
  );
}
