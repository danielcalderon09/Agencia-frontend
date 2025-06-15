import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardAlojamiento from "../components/CardAlojamiento";
import "../styles/Alojamiento.scss";
import PageWrapper from "../components/PageWrapper";

import tatacoa from '../assets/Alojamiento/colonial-desierto.jpeg';
import rivera from '../assets/Alojamiento/casaGabriel-rivera.jpg';
import garzon from '../assets/Alojamiento/Cambur-Garzon.jpg';
import gigante from '../assets/Alojamiento/Bota-Gigante.jpg';
import sanagustin from '../assets/Alojamiento/casaFrancois-sanAgustin.jpg';

const alojamientos = [
  { titulo: 'Tatacoa', imagen: tatacoa, descripcion: 'Disfruta del desierto y de las estrellas en hoteles o glampings únicos.' },
  { titulo: 'Rivera', imagen: rivera, descripcion: 'Termales, naturaleza y cultura en un entorno relajante.' },
  { titulo: 'Garzón', imagen: garzon, descripcion: 'Un pueblo encantador para desconectar y recargar energía.' },
  { titulo: 'Gigante', imagen: gigante, descripcion: 'Descubre las montañas y sabores del Huila desde el corazón del departamento.' },
  { titulo: 'San Agustín', imagen: sanagustin, descripcion: 'Misterios arqueológicos y aventura en uno de los destinos más emblemáticos de Colombia.' },
];

export default function Alojamiento() {
  return (
    <>
      <Navbar />
       <PageWrapper>
      <section className="alojamiento">
        <h2>Alojamientos Destacados</h2>
        <div className="alojamiento-grid">
          {alojamientos.map((aloj, index) => (
            <CardAlojamiento
              key={index}
              titulo={aloj.titulo}
              imagen={aloj.imagen}
              descripcion={aloj.descripcion}
            />
          ))}
        </div>
      </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
