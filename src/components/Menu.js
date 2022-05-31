import { MenuButton, Menu, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function MyMenu() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronRight />}>
        Contenido
      </MenuButton>
      <MenuList>
        <MenuItem><Link to = {"/comprar.html"}>Comprar curso</Link></MenuItem>
        <MenuItem><Link to = {"/loginUser.html"}>Ir al curso </Link></MenuItem>
        <MenuItem>Desloguear</MenuItem>
      </MenuList>
    </Menu>
  );
}
