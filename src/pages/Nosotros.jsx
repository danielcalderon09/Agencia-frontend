import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import HeroNosotros from "../components/Nosotros/HeroNosotros";
import QuienesSomos from "../components/Nosotros/QuienesSomos";
import MisionVision from "../components/Nosotros/MisionVision";
import Historia from "../components/Nosotros/Historia";
// import QuienesSomos from "../components/Nosotros/QuienesSomos";
// import ValoresNosotros from "../components/Nosotros/ValoresNosotros"; // para Misión y Visión

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <PageWrapper>

        <HeroNosotros />
        <QuienesSomos/>
        <MisionVision/>
        <Historia/>

        {/* Aquí irán los siguientes componentes de la sección */}
        {/* <QuienesSomos /> */}
        {/* <ValoresNosotros /> */}

      </PageWrapper>
      <Footer />
    </>
  );
}
