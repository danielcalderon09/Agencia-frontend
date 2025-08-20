import { useLocation } from 'react-router-dom';
import '../styles/CtaFinal.scss';
import fondoTatacoa from '../assets/Blog/desiertoTatacoa.jpg';

export default function CtaFinal() {
  const location = useLocation();
  const esUsuario = location.pathname.startsWith("/usuario");

  return (
    <section
      className="cta-agencia"
      style={{ backgroundImage: `url(${fondoTatacoa})` }}
    >
      <div className="overlay" />
      <div className="contenido">
        <h2>Desconéctate del mundo.<br />Reconéctate contigo.</h2>
        <p>
          Descubre el Desierto de la Tatacoa con nuestros planes exclusivos.
          Naturaleza, estrellas, aventura y magia en un solo destino.
        </p>
        <a
          href={esUsuario ? "/usuario/planesturisticos" : "/planes"}
          className="boton-reserva"
        >
          Ver planes disponibles
        </a>
        <span className="submensaje">
          *Viajes todo incluido con cupos limitados*
        </span>
      </div>
    </section>
  );
}
