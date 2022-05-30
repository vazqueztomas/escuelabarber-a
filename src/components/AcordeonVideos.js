import {
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
export default function AcordeonVideos(props) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {props.titulo}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} spacing={4}>
        {props.contenido}
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            width="560"
            height="315"
            src={props.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </AccordionPanel>
    </AccordionItem>
  );
}
