import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CarruselDestinos from "../components/CarruselDestinos";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import CarruselTestimonios from "../components/CarruselTestimonios";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
        <CarruselDestinos />
        <CarruselTestimonios/>
      </PageWrapper>
      <Footer />
    </>
  );
}
