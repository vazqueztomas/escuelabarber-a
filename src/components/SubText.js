import { Text } from "@chakra-ui/react";
export default function SubText(props){
    let color = "#ECC94B";
    return <Text color = {color} fontWeight = {"bolder"}>{props.subtext}</Text>
}