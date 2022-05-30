import { Stack, Text, Image } from "@chakra-ui/react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RepeatIcon from "@mui/icons-material/Repeat";
export default function Elegirnos() {
    let color = "#ECC94B"
  return (
    <Stack paddingY={5} paddingBottom={[10,10,20]}>
      <Text fontSize={"4xl"} py={10}>¿Por qué elegirnos?</Text>
      <Stack
        direction={["column","column-reverse","row"]}
        alignItems="center"
        justifyContent={["center","space-evenly"]}
        spacing={[10,10,20]}
      >
        <Stack direction={"column"} spacing={[5,5,10]} mx={[6,4,2]}>
          <Stack direction={"row"} alignItems={"center"} textAlign={"start"} spacing={4}justifyContent={"space-between"}>
            <Stack>
            <Text fontSize={"3xl"}>Gran demanda laboral</Text>
            <Text fontSize={"xl"}>La barbería siempre tuvo, y va a seguir teniendo una gran demanda laboral.</Text>
            </Stack>
            <CallMadeIcon   sx={{color: {color}, fontSize: 35}}/>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} textAlign={"start"} spacing={4}justifyContent={"space-between"}>
          <Stack>
            <Text fontSize={"3xl"}>Precio accesible</Text>
            <Text fontSize={"xl"}>Nuestros precios compiten contra los mejores del mercado.</Text>
            </Stack>
            <AttachMoneyIcon   sx={{color: {color}, fontSize: 35}}/>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} textAlign={"start"} justifyContent={"space-between"}spacing={4}>
            <Stack>
            <Text fontSize={"3xl"}>24/7 dedicandonos a esto</Text>
            <Text fontSize={"xl"}>Podrás preguntarnos lo que quieras por mensaje directo.</Text>
            </Stack>
            <RepeatIcon sx={{color: {color}, fontSize: 35}} />
          </Stack>
        </Stack>
        <Image
          src="https://alfaescueladebarberia.com/wp-content/uploads/2021/06/zDSC_0281.jpg"
          maxWidth={"500px"}
          w={"100%"}
        ></Image>
      </Stack>
    </Stack>
  );
}
