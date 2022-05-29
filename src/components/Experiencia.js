import { Stack, Text } from "@chakra-ui/react";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export default function Experiencia() {
  return (
    <Stack
      direction={"row"}
      spacing={10}
      justifyContent={"space-evenly"}
      marginY={12}
    >
      <Stack wordBreak={"break-word"} maxWidth={"300px"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"}>
          <ContentCutIcon sx={{ fontSize: 45 }} />
          <Text fontSize={"xl"} fontWeight={"bolder"}>Potencia tus habilidades.</Text>
        </Stack>
        <Text>Tenemos todas las herramientas necesarias para equipararte con mas habilidades para el futuro.</Text>
      </Stack>
      <Stack wordBreak={"break-word"} maxWidth={"300px"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"}>
          <MenuBookIcon sx={{ fontSize: 45 }}/>
          <Text fontSize={"xl"} fontWeight={"bolder"}>Aprendé desde cero.</Text>
        </Stack>
        <Text>Con nuestro índice de videos tenés para empezar y aprender todo lo necesario para esta industria.</Text>
      </Stack>

      <Stack wordBreak={"break-word"} maxWidth={"300px"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"}>
          <OndemandVideoIcon sx={{ fontSize: 45 }} />
          <Text fontSize={"xl"} fontWeight={"bolder"}>Manejá tus horarios.</Text>
        </Stack>
        <Text>
          Mirá nuestros videos las veces que creas necesarias, en el momento del
          día que te quede más cómodo.
        </Text>
      </Stack>
    </Stack>
  );
}
