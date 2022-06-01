import Card from "../Card";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Stack, Text} from "@chakra-ui/react";

export default function Ofrecemos() {
    let color = "#ECC94B";
  return (
    <Stack my={[10]} marginX={["0px","0px","120px"]}>
      <Text fontSize={["3xl", "4xl"]} borderBottom={`2px solid ${color}`}  m={"0 auto"}>Que te ofrecemos?</Text>
      <Stack spacing={4} py={[5,10]} px={[0,0,4]} direction={["column","column","row"]} justifyContent={["center"]} alignItems={["center"]}>
        <Card
          titulo="Programa completo"
          subtitulo="Nuestro programa completo incluye todos los videos, ayuda personalizada y retos exclusivos "
          precio="$2999"
        ></Card>
        <Stack direction={["column"]} spacing={[5, 5, 10]}>
          <Stack direction={["column-reverse","row"]} alignItems={"center"} justifyContent={"space-between"} px={8}>
            <Stack textAlign={"start"}>

            <Text fontSize={"2xl"}>
              Contenido de videos para que consumas las veces que sea necesario.
            </Text>
            <Text fontSize={"lg"}>Los videos del curso los tendrás disponible 24/7 para que los consumas cuando vos quieras.</Text>
            </Stack>
            <CallMadeIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
          <Stack direction={["column-reverse","row"]} alignItems={"center"} justifyContent={"space-between"} px={8}>
            <Stack textAlign={"start"}>

            <Text fontSize={"2xl"}>
              Precio accesible y económico (el precio esta en pesos ARS$)
            </Text>
            <Text fontSize={"lg"}>Porque sabemos lo difícil que esta la economía, por solo $2999 ARS podrás llevarte todos los videos para aprender de barbería.</Text>

            </Stack>
            <AttachMoneyIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
          <Stack direction={["column-reverse","row"]} alignItems={"center"} justifyContent={"space-between"} px = {8}>
            <Stack textAlign={"start"}>

            <Text fontSize={["2xl"]}>
              Obtené feedback de un profesor que te va a ir guiando
            </Text>
            <Text fontSize={["lg"]}>Por mensaje privado podés consultarle a tu profesor, para ver si vas en buen camino</Text>

            </Stack>
            <RepeatIcon sx={{ color: { color }, fontSize: 35 }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
