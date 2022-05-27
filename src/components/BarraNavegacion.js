import { Navbar, Container } from "react-bootstrap"

export default function BarraNavegacion(props){
    return(
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt={props.name}
          src={props.img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      La barbería de Toto - Escuela
      </Navbar.Brand>
    </Container>
  </Navbar>

    )
}