import Card from "../Card";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Stack, Text, Image } from "@chakra-ui/react";
import Titulo from "../Titulo";

export default function Ofrecemos() {
    let color = "#ECC94B";
  return (
    <Stack my={10}>
      <Titulo titulo="¿Que te ofrecemos?"></Titulo>
      <Stack spacing={4} py={10} px={4} direction={["column","column","row"]} justifyContent={["center"]} alignItems={["center"]}>
        <Card
          titulo="Programa completo"
          subtitulo="Nuestro programa completo incluye todos los videos, ayuda personalizada y retos exclusivos "
          precio="$2700 "
        ></Card>
        <Stack direction={["column"]} spacing={[5, 5, 10]} alignItems={"center"}>
          <Stack direction={["row"]} alignItems={"center"}>
            <Text fontSize={"3xl"}>
              Contenido de videos para que consumas las veces que sea necesario.
            </Text>
            <CallMadeIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Text fontSize={"3xl"}>
              Precio accesible, económico (el precio esta en pesos ARS$)
            </Text>
            <AttachMoneyIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Text fontSize={"3xl"}>
              Obtené feedback de un profesor que te va a ir guiando
            </Text>
            <RepeatIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
        </Stack>
      </Stack>

      <Text fontSize={"sm"} fontWeight={"italic"}>
        Todos los precios incluyen ayuda personalizada.
      </Text>
    </Stack>
  );
}
