import { Stack, Image, Text, Link } from "@chakra-ui/react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MyMenu from "./Menu";

export default function BarraNavegacion(props) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginY={6}
      paddingX={6}
    >
      <Stack direction={"row"} textAlign={"start"} alignItems={"center"}>
        <Image
          src="https://reservaturno.com/img/icono-barberia.png"
          boxSize={"30px"}
        ></Image>
        <Text fontWeight={"bold"}>Barberia "El negrito"</Text><Text fontSize={"sm"}>- Escuela</Text>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={8} justifyContent={"center"}>
        <MyMenu/>
        <Link href = 'google.com' isExternal>
          <PersonOutlineIcon />
        </Link>
      </Stack>
    </Stack>
  );
}
