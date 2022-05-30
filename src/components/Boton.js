import {Button} from '@chakra-ui/react'

export default function Boton (props) {
    return(
        <Button colorScheme="yellow" size="lg">
            {props.textContent}
          </Button>
    )
}