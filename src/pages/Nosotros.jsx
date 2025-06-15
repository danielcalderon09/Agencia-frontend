import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GaleriaFotos from "../components/GaleriaFotos";
import "../styles/Nosotros.scss";
import PageWrapper from "../components/PageWrapper";

export default function Nosotros() {
  const navigate = useNavigate();

  const scrollToContacto = () => {
    navigate("/contacto");
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
      <section className="nosotros-bloque">
        <div className="fotos">
          <GaleriaFotos />
        </div>
        <div className="info">
          <h2>¿Quiénes somos?</h2>
          <h4>Agencia de viajes</h4>
          <p>
            En Colonial Travel estamos comprometidos con brindar experiencias turísticas únicas y memorables.
            Operamos en distintas ciudades del país desde hace más de 4 años, ofreciendo servicios de alta calidad en turismo, recreación, descanso, diversión, cultura y gastronomía.
          </p>
          <p>
            Nuestra atención es personalizada, con planes exclusivos y descuentos especiales, buscando siempre la mejor relación costo-beneficio para nuestros viajeros.
          </p>
          <button onClick={scrollToContacto}>Contáctanos</button>
        </div>
      </section>

      <section className="nosotros-mision-vision">
        <div className="bloque-texto vision">
          <h2>VISIÓN</h2>
          <p>
            Ser reconocidos como una agencia líder en el turismo colombiano y latinoamericano, destacada por su autenticidad, sostenibilidad y el valor cultural de cada experiencia que ofrece.
          </p>
        </div>
        <div className="bloque-imagen"></div>
      </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
