import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarruselTestimonios.scss";

import user1 from "../assets/Testimonios/hombre-1.jpg";
import user2 from "../assets/Testimonios/hombre-2.jpg";
import user3 from "../assets/Testimonios/mujer-1.jpg";
import user4 from "../assets/Testimonios/mujer-2.jpg";
import user5 from "../assets/Testimonios/mujer-3.jpg";

const testimonios = [
  {
    nombre: "Laura Rodríguez",
    comentario: "¡Una experiencia inolvidable! Todo fue perfecto.",
    calificacion: 5,
    imagen: user1,
  },
  {
    nombre: "Carlos Mendoza",
    comentario: "Excelente atención y servicio. ¡Volveré!",
    calificacion: 4,
    imagen: user2,
  },
  {
    nombre: "Andrea Gómez",
    comentario: "Los paisajes y la organización, una maravilla.",
    calificacion: 5,
    imagen: user3,
  },
  {
    nombre: "Juan Pérez",
    comentario: "El mejor viaje que he tenido. Muy recomendado.",
    calificacion: 5,
    imagen: user4,
  },
  {
    nombre: "María Fernanda",
    comentario: "Muy buenos precios y destinos increíbles.",
    calificacion: 4,
    imagen: user5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function CarruselTestimonios() {
  return (
    <section className="carrusel-testimonios">
      <h2>Testimonios de nuestros viajeros</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={6000}
        arrows={false}
        showDots
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {testimonios.map((t, index) => (
          <div className="testimonio-card" key={index}>
            <div className="header">
              <img src={t.imagen} alt={t.nombre} className="foto" />
              <div>
                <h3>{t.nombre}</h3>
                <div className="estrellas">
                  {"★".repeat(t.calificacion)}{"☆".repeat(5 - t.calificacion)}
                </div>
              </div>
            </div>
            <p className="comentario">“{t.comentario}”</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}