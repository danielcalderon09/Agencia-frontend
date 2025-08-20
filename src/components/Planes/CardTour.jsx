import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/Planes/CardTour.scss";

const CardTour = ({ plan }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [indexImagen, setIndexImagen] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const imagenes = plan.imagenes || [];

  // Detectar si estamos en modo usuario afiliado
  const esUsuario = location.pathname.startsWith("/usuario");

  const iniciarCarrusel = () => {
    if (imagenes.length > 1 && !intervalId) {
      const id = setInterval(() => {
        setIndexImagen((prev) => (prev + 1) % imagenes.length);
      }, 1200);
      setIntervalId(id);
    }
  };

  const detenerCarrusel = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIndexImagen(0); // Reset a la primera imagen al salir
  };

  const irAlDetalle = () => {
    const ruta = esUsuario
      ? `/usuario/planesturisticos/${plan._id}`
      : `/planes/${plan._id}`;
    navigate(ruta);
  };

  return (
    <div
      className="card-tour"
      onClick={irAlDetalle}
      onMouseEnter={iniciarCarrusel}
      onMouseLeave={detenerCarrusel}
    >
      <div className="card-image">
        {imagenes.length > 0 && (
          <img
            src={`http://localhost:5000${imagenes[indexImagen]}`}
            alt={plan.titulo}
          />
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{plan.titulo}</h3>
        <p className="card-summary">{plan.descripcionCorta}</p>
        <button className="card-button">Ver más</button>
      </div>
    </div>
  );
};

export default CardTour;
