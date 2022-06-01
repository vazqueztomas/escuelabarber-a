import { Text } from "@chakra-ui/react";

export default function Titulo(props) {
  return <Text fontSize={["3xl", "4xl"]} fontWeight="bolder">{props.titulo} </Text>;
}
