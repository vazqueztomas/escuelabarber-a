import { MenuButton, Menu, MenuItem, MenuList, Button } from "@chakra-ui/react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from "react-router-dom";
export default function MyMenu() {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme = "yellow" variant="ghost" borderColor = {"none"} rightIcon={<ArrowDownwardIcon/>}>
      </MenuButton>
      <MenuList>
        <MenuItem><Link to = {"/comprar.html"}>Comprar curso</Link></MenuItem>
        <MenuItem><Link to = {"/cursobarberia.html"}>Ir al curso </Link></MenuItem>
        {/* <MenuItem>Desloguear</MenuItem> */}
      </MenuList>
    </Menu>
  );
}
