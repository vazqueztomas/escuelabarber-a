import Header from "../components/sections/Header";
import Hero from "../components/Hero";
import Experiencia from "../components/sections/Experiencia";
import Trabaja from "../components/sections/Trabaja";
import Elegirnos from "../components/sections/Elegirnos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        titulo="Queres desarrollar y transformar tu futuro?"
        subtitulo="Comenzá con esta maravillosa profesión de ser barbero/a. Dale un giro a tu vida y aprendé en esta industria que no tiene límites." textContent = "COMENZA AHORA" image = 'https://blog.agendapro.com/hubfs/Barberia.png'
      />
      <Experiencia />
      <Elegirnos />
      <Trabaja />
    </>
  );
}
