import Navbar from "../../components/Usuarios/NavbarUsuario";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SeccionPorQue from "../../components/SeccionPorQue";
import CarruselDestinos from "../../components/CarruselDestinos";
import CarruselTestimonios from "../../components/CarruselTestimonios";
import CtaFinal from "../../components/CtaFinal";
import PageWrapper from "../../components/PageWrapper";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SeccionPorQue />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <CarruselDestinos />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <CarruselTestimonios />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <CtaFinal />
        </motion.div>
      </PageWrapper>
      <Footer />
    </>
  );
}
