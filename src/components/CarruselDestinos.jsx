import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarruselDestinos.scss";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function CarruselDestinos() {
  const [planes, setPlanes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔍 Detectar si estamos en el área de afiliado
  const esAfiliado = location.pathname.startsWith("/usuario");

  useEffect(() => {
    fetch("http://localhost:5000/api/planes")
      .then(res => res.json())
      .then(data => setPlanes(data))
      .catch(err => console.error("Error al cargar planes:", err));
  }, []);

  return (
    <section className="carrusel-destinos">
      <h2>Planes Turísticos Destacados</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="carousel-item"
        showDots={false}
        arrows
      >
        {planes
          .filter(plan => plan.imagenes?.length > 0)
          .map((plan, index) => (
            <div
              className="card-destino"
              key={index}
              onClick={() =>
                navigate(
                  esAfiliado
                    ? `/usuario/planesturisticos/${plan._id}`
                    : `/planes/${plan._id}`
                )
              }
            >
              <div
                className="card-imagen"
                style={{
                  backgroundImage: `url(http://localhost:5000${plan.imagenes[0]})`
                }}
              >
                <div className="card-nombre">{plan.titulo}</div>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  );
}
