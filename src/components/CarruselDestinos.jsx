import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarruselDestinos.scss";

import sansiraka from "../assets/DestinosRecomendados/playa.jpg";
import tayrona from "../assets/DestinosRecomendados/SantaMarta.jpg";
import unionVaia from "../assets/desiertoTatacoa.jpg";


const destinos = [
  { nombre: "Sansiraka", imagen: sansiraka },
  { nombre: "Tayrona Beach", imagen: tayrona },
  { nombre: "Union Vaia", imagen: unionVaia },
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function CarruselDestinos() {
  return (
    <section className="carrusel-destinos">
      <h2>Destinos Destacados</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
        showDots={false}
        arrows={true}
      >
        {destinos.map((destino, index) => (
          <div className="card-destino" key={index}>
            <div
              className="card-imagen"
              style={{
                backgroundImage: `url(${destino.imagen})`,
              }}
            >
              <div className="card-nombre">{destino.nombre}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
