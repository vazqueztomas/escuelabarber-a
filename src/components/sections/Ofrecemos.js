import Card from "../Card";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Stack, Text} from "@chakra-ui/react";
import Titulo from "../Titulo";

export default function Ofrecemos() {
    let color = "#ECC94B";
  return (
    <Stack my={[10]} width={"100%"}>
      <Titulo titulo="¿Que te ofrecemos?"></Titulo>
      <Stack spacing={4} py={[5,10]} px={[0,0,4]} direction={["column","column","row"]} justifyContent={["center"]} alignItems={["center"]}>
        <Card
          titulo="Programa completo"
          subtitulo="Nuestro programa completo incluye todos los videos, ayuda personalizada y retos exclusivos "
          precio="$2700 "
        ></Card>
        <Stack direction={["column"]} spacing={[5, 5, 10]} alignItems={""}>
          <Stack direction={["column-reverse","row"]} alignItems={"center"} justifyContent={"space-between"} px={8}>
            <Stack textAlign={"start"}>

            <Text fontSize={"3xl"}>
              Contenido de videos para que consumas las veces que sea necesario.
            </Text>
            <Text fontSize={"xl"}>Los videos del curso los tendrás disponible 24/7 para que los consumas cuando vos quieras.</Text>
            </Stack>
            <CallMadeIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
          <Stack direction={["column-reverse","row"]} alignItems={"center"} justifyContent={"space-between"} px={8}>
            <Stack textAlign={"start"}>

            <Text fontSize={"3xl"}>
              Precio accesible y económico (el precio esta en pesos ARS$)
            </Text>
            <Text fontSize={"xl"}>Porque sabemos lo difícil que esta la economía, por solo $2500 ARS podrás llevarte el curso completo de barbería.</Text>

            </Stack>
            <AttachMoneyIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
          <Stack direction={["column-reverse","row"]} alignItems={"center"} justifyContent={"space-between"} px = {8}>
            <Stack textAlign={"start"}>

            <Text fontSize={["3xl"]}>
              Obtené feedback de un profesor que te va a ir guiando
            </Text>
            <Text fontSize={["xl"]}>Por mensaje privado podés consultarle a tu profesor, para ver si vas en buen camino</Text>

            </Stack>
            <RepeatIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
