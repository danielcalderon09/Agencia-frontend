import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import PageWrapper from "../components/PageWrapper";
import CarruselInstalaciones from "../components/Alojamiento/CarruselInstalaciones";
import CarruselHabitaciones from "../components/Alojamiento/CarruselHabitaciones";
import Restaurante from "../components/Alojamiento/Restaurante";
import Piscina from "../components/Alojamiento/Piscina";



export default function Alojamiento() {
  return (
    <>
      <Navbar />
      <PageWrapper>

      <CarruselInstalaciones/>
      <CarruselHabitaciones/>
      <Restaurante/>
      <Piscina/>

       

      </PageWrapper>
      <Footer />
    </>
  );
}