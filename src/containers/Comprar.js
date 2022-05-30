
import Hero from "../components/Hero";
import Header from "../components/sections/Header";
import Ofrecemos from "../components/sections/Ofrecemos";


export default function Comprar() {

  return (
    <header>
      <Header></Header>
      <Hero
        titulo="Dale un giro a tu vida y comenzá"
        subtitulo="Dale un giro a tu entorno laboral y trabajá de lo que a vos te gusta. No te podés perder ésta oportunidad."
        textContent="COMPRAR AHORA"
        image="https://www.axa.co.uk/globalassets/new-website/business/who-we-cover/2020_02_barbers/barber_masthead.jpg?width=1600&mode=crop&heightratio=0.5625&quality=80"
      ></Hero>
      <Ofrecemos/>
    </header>
  );
}
