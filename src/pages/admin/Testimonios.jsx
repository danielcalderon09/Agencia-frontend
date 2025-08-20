import { useEffect, useState } from "react";
import "../../styles/Testimonios/Testimonios.scss";

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);

  const obtenerTestimonios = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/testimonios");
      const data = await res.json();
      setTestimonios(data);
    } catch (err) {
      console.error("Error al obtener testimonios", err);
    }
  };

  useEffect(() => {
    obtenerTestimonios();
  }, []);

  return (
    <section className="testimonios-publica">
      <h2>Lo que dicen nuestros viajeros</h2>
      <div className="subrayado" />

      <div className="contenedor-testimonios">
        {testimonios.map((testimonio) => (
          <div className="card-testimonio" key={testimonio._id}>
            <div className="imagen">
              <img
                src={`http://localhost:5000${testimonio.imagen}`}
                alt={testimonio.nombre}
              />
            </div>
            <p className="opinion">“{testimonio.opinion}”</p>
            <h4>{testimonio.nombre}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
