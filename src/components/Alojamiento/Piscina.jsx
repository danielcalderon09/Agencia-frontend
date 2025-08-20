import '../../styles/Alojamiento/Piscina.scss';
import piscina1 from '../../assets/Alojamiento/piscina.jpeg';
import piscina2 from '../../assets/Alojamiento/piscina-2.jpeg';

const Piscina = () => {
  return (
    <section className="piscina-container">
      <div className="piscina-content">
        {/* Imágenes a la izquierda */}
        <div className="piscina-images">
          <img src={piscina1} alt="Piscina 1" className="piscina-image image-top" />
          <img src={piscina2} alt="Piscina 2" className="piscina-image image-bottom" />
        </div>

        {/* Texto a la derecha */}
        <div className="piscina-text">
          <h2 className="piscina-title">Piscina Colonial</h2>
          <p className="piscina-description">
            Nuestra piscina al aire libre ofrece un espacio refrescante rodeado de naturaleza y arquitectura colonial. Disfruta del clima cálido, relájate en camastros y vive momentos únicos en un ambiente familiar y acogedor.
          </p>
          <button className="piscina-button">Ver Más</button>
        </div>
      </div>
    </section>
  );
};

export default Piscina;
