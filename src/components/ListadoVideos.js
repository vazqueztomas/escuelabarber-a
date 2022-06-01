import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  UnorderedList,
  ListItem,
  Stack
} from "@chakra-ui/react";
import AcordeonVideos from "./AcordeonVideos";
import SubText from './SubText'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Titulo from "./Titulo";

import { useState } from "react";

function VerificaUser() {
  const USUARIOS = ["GSbofvexX6VVTIltq4Sr2foJw473"]
  const auth = getAuth();
  const [pago, setPago] = useState(false)
  onAuthStateChanged(auth, (user) => {
  if (user) {  
    const uid = user.uid;
    if (USUARIOS.includes(uid)) {
      setPago(true)
      // console.log("El usuario pago")
    }
  } else {
    setPago(false)
  }
});
return pago
}




export default function ListadoVideos(props) {      
  return (
    <Stack>
      {VerificaUser() ? <Videos/> : <Stack><Titulo titulo = "Debes comprar el curso para poder ver los videos!"></Titulo><SubText subtext = 'Si ya compraste el curso, y todavia no te aparece en esta sección, por favor mandanos un mail a benescuela@gmail.com'></SubText></Stack>}
    </Stack>
  );
}

const Videos = () => {
  return(
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      maxWidth={720}
      w={["xs", "sm", "xl"]}
    >
      <AcordeonVideos
        titulo="Capítulo 1: Introduccion a la barbería"
        contenido="La barbería más que un oficio es considerado una profesión, siendofundamental en el cuidado estético masculino y las nuevas tendenciasen cabello y barbas. La tecnología y las nuevas técnicas de estilos han marcado un antes y un después en el desarrollo de las actividades de los barberos. Ahora pongamos una buena música y comencemos a aprender. Manos a la obra!"
        video="https://www.youtube.com/embed/pXRviuL6vMY"
      ></AcordeonVideos>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Capítulo 2: Herramientas necesarias
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Necesitaremos herramientas básicas para comenzar en este rubro. La
          idea es empezar con cosas ecónomicas pero de buena calidad para que se
          nos haga mucho más fácil nuestro trabajo. Necesitaremos
          <UnorderedList>
            <ListItem>
              Maquina clipper , preferentemente marca Wahl o BabyLiss, aunque
              Kemei es de buena calidad también.
            </ListItem>
            <ListItem>Tijeras, de corte y de entresacar</ListItem>
            <ListItem>
              Capa de corte, preferentemente con gancho para más comodidad del
              cliente
            </ListItem>
            <ListItem>
              Trimmer (patillera), no es indispensable, pero tendremos mejores
              resultados.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AcordeonVideos
        titulo="Capítulo 3: Uso de las tijeras"
        contenido="Las tijeras son de uso indispensable en nuestro día a día como barbero. Tenemos distintos tipos de tijeras, de corte, de entresacar, etc. El correcto uso de esta herramienta nos ayudará a realizar un corte de cabello mucho más eficientemente, además de evitar futuros dolores en la mano con la que realizamos el corte. Por eso: El agarre de la tijera se realiza con los dedos pulgar y anular (el que esta al lado del meñique). El movimiento lo vamos a realizar con el pulgar unicamente, sin mover el otro dedo para  generar un mejor agarre y un corte limpio. A continuacion, dejamos un video explícito de como se debe manufacturar esta herramienta. El video esta inglés, pero es lo de menos porque no necesitamos entenderlo para ver como utilizarlas. "
        titleVideo="StressedOut"
        video="https://www.youtube.com/embed/C9P5NGPkd38"
      ></AcordeonVideos>
      {/* Cap 4 */}
      <AcordeonVideos
        titulo="Capítulo 4: División del cabello"
        contenido="La division del cabello en un corte es una pieza clave para asegurarnos que el corte va a estar bien realizado, y conseguir un buen corte. Este tipo de division es utilizado en la mayoria de los cortes modernos y también en los clásicos. Es fundamental aprender esta division de memoria para poder trabajar eficientemente. El siguiente video explica como se divide el cabello, está en español por lo que podrás escuchar lo que el autor dijo y anotarte esos consejos."
        titleVideo="Division del cabello"
        video="https://www.youtube.com/embed/3x64KgaBBW0"
      ></AcordeonVideos>
      {/* Cap5 */}
      <AcordeonVideos
        titulo="Capítulo 5: Tijera sobre peine: la técnica."
        contenido="Esta técnica intenta realizar un corte gradual en el cabello. Es muy utilizada cuando se desea crear una forma definida o cuando se busca un peinado que se estrecha en las áreas laterales y la nuca. Cuando use las tijeras para suavizar los bordes, el corte puede moldearse y peinarse como desee. Es necesario tener en cuenta la importancia de utilizar un peine. Después de todo, no solo te ayudará a levantar el cabello, sino que también guiará las tijeras para dar forma al corte."
        titleVideo="Tecnica tijera sobre peine"
        video="https://www.youtube.com/embed/SKvvQ2J5ZeE"
      ></AcordeonVideos>
      {/* Cap6 */}
      <AcordeonVideos
        titulo="Capítulo 6: ¿Como realizar el cuchareo?"
        contenido="La tecnica de “cuchareo” es una técnica muy utilizada en la industria de la barbería y se emplea cuando generalmente en cortes de tipo “fade”. Esta técnica simplifica el corte y tiene como objetivo NO MARCAR LINEAS, o tratar de marcar las menos posibles utilizando la “palanca” de nuestra máquina, para lograr un mejor efecto y un corte mucho más limpio. Se realiza con maquina y se busca realizar un movimiento de ‘cuchara’. El corte se realiza apretando desde abajo la maquina, y a medida que se sube, levantarla.Dejaremos un video explicatorio de como se realiza. Ésta practica, al ser una de las mas utilizadas, también tiene su curva de aprendizaje un poco alta, por lo que debemos practicar mucho. El video está en español por lo que recomiendo prestar atención para utilizar los consejos que se utilizan."
        titleVideo="Cuchareo video"
        video="https://www.youtube.com/embed/ec-CGBAS95w"
      ></AcordeonVideos>
      {/* Cap7 */}
      <AcordeonVideos
        titulo="Capítulo 7: Corte clásico con peine sobre tijera."
        contenido="Este estilo de corte es uno de los más utilizados y mas veloces de realizar. Trata de dejar el pelo en la parte superior un poco mas largo que en los costados y en la parte de atrás, realizandolo con tijera unicamente. </br> Debemos dividir la parte superior en forma de herradura (en el video está explicito), y realizar cortes entre secciones. (el video utiliza una tecnica de punteado en la parte superior, pero sirve igualmente cortar recto para realizar un corte clasico). En los costados utiliza la técnica “tijera sobre peine”. El video está en ingles, pero las técnicas se ven claramente."
        titleVideo="Corte clasico"
        video="https://www.youtube.com/embed/LdJ_VibbwIo"
      ></AcordeonVideos>
      {/* Cap8 */}
      <AcordeonVideos
        titulo="Capítulo 8: Corte clasico en secciones"
        contenido="Si la tecnica que utiliza en los costados no es de tu agrado o te queda mas comodo seccionar el cabello, el siguiente video explica como realizar un corte con secciones (tambien a los costados) y finalizar un corte clásico."
        titleVideo="Corte clasico en secciones"
        video="https://www.youtube.com/embed/u2TqckSVQ1I"
      ></AcordeonVideos>
      {/* Cap9 */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Capítulo 9: Fade
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Este corte sea probablemente uno de lo mas utilizados en la actualidad
          y todo buen barbero debe saber realizarlo. Se remonta a los años
          treinta con la aparición de la maquina eléctrica, pero en **década de
          los cincuenta este tipo de peinado se hizo popular.** En esta gama de
          cortes, conseguimos distintos tipos (low, mid, high) segun lo corto
          que se hara en la parte lateral y nuca
          <UnorderedList>
            <ListItem>
              Mid: aterriza por debajo de las sienes y por encima de la oreja
              (justo en el centro del lateral de la cabeza)
            </ListItem>
            <ListItem>
              Low: En la coronilla se mantiene el pelo bastante largo en
              contraposición al desvanecido que comienza en la zona alta del
              cráneo, casi en la línea de raya superio
            </ListItem>
            <ListItem>
              High: En los laterales, como en la parte de atrás de la cabeza, el
              cabello es afeitado completamente
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      {/* Cap 9.1 */}
      <AcordeonVideos
        titulo="Capítulo 9.1: Fade (VIDEO EXPLICATIVO)"
        contenido="En el siguiente video, se explica como realizar un mid fade. Este video esta en inglés, por lo que no es necesario escuchar si no que hay que focalizarse en lo visual. Las tecnicas utilizadas en este video, sirven para realizar tanto el mid, como el low y el high fade. (Son las mismas tecnicas, solo varia la cantidad de pelo cortado). Es muy interesante ver como se utilizan tecnicas anteriormente explicadas (cuchareo cuando se utiliza maquina, y tijera sobre peine para acomodar los laterales y la parte trasera)."
        titleVideo="Fade"
        video="https://www.youtube.com/embed/roAV3IDdodk"
      ></AcordeonVideos>
      {/* Cap10 */}
      <AcordeonVideos
        titulo="Capítulo 10: Taper fade"
        contenido="El taper fade es un corte muy utilizado tambien en la actualidad y consiste en generar un desvanecido en la parte de las patillas y en la parte mas baja de la nuca. Este corte es fácil de realizar pero difícil de conseguir un “corte perfecto” ya que se tiene mucho en cuenta las delimitaciones y marcaciones en los CONTORNOS."
        titleVideo="Taper"
        video="https://www.youtube.com/embed/GENFColE0nM"
      ></AcordeonVideos>
      {/* Cap10.1 */}
      <AcordeonVideos
        titulo="Capítulo 10.1: Taper fade (video 2)"
        contenido="En el siguiente video veremos otra alternativa para realizar el taper."
        titleVideo="Taper 2"
        video="https://www.youtube.com/embed/Ik-Pz06FHuc"
      ></AcordeonVideos>
      {/* Cap 11 */}
      <AcordeonVideos
        titulo="Capítulo 11: French Crop"
        contenido="Este estilo de corte se basa en tener un degradado (puede ser alto, bajo o mediano) en la parte de los laterales y nuca, y generar una caida en el pelo en la parte de la frente. Por lo tanto, debemos dejar la parte superior de la cabeza con un mayor volumen de pelo. En este tipo de cortes tenemos algunas variaciones, como el estilo de flequillos que se pueden utilizar. Sin dudas este corte de cabello proporciona un estilo único al cliente. El siguiente video esta en español por lo que recomiendo que escuchen y presten atencion a lo que dice el autor. Es interesante ver como secciona el cabello, y aplica técnicas ya mencionadas en el curso."
        titleVideo="French crop"
        video=" https://www.youtube.com/embed/EAtTrrt3O6g"
      ></AcordeonVideos>
      {/* Cap 12 */}
      <AcordeonVideos
        titulo="Capítulo 12: Burst Fade"
        contenido="Este estilo de corte es distinto a los demás explicados en el curso ya que en él se busca crear un tipo de “cresta”. Sin embargo, también utiliza técnicas ya explicadas como la de realizar un degradé o fade. El video está en español, y el autor crea un estilo unico en el cabello, por lo que recomiendo prestar atención a lo que dice y tomar nota."
        titleVideo="burst fade"
        video="https://www.youtube.com/embed/jPTLY9EC0w4"
      ></AcordeonVideos>
    </Accordion>
  )
}