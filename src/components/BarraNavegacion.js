import { Stack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MyMenu from "./Menu";


export default function BarraNavegacion(props) {
  return (
    <Stack
      direction={"row"}
      justifyContent={["space-evenly","space-around","space-between"]}
      alignItems={"center"}
      marginY={[2,6]}
      marginX={[0,2,6]}
    >
      <Link to="/">
        <Stack direction={"row"} textAlign={"start"} alignItems={"center"}>
          <Image
            src="https://reservaturno.com/img/icono-barberia.png"
            boxSize={"30px"}
          ></Image>
          <Text fontWeight={"bold"} fontSize={["sm"]}>
            Barberia "El negrito"
          </Text>
        </Stack>
      </Link>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={8}
        justifyContent={"center"}
      >
        <MyMenu />
      </Stack>
    </Stack>
  );
}
