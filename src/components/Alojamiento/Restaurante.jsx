import '../../styles/Alojamiento/Restaurante.scss';
import plato1 from '../../assets/Alojamiento/IMAGEN-BAR.jpg';
import plato2 from '../../assets/Alojamiento/restaurante-hamburguesa.jpg';

const Restaurante = () => {
  return (
    <section className="restaurante-container">
      <div className="restaurante-content">
        {/* Texto a la izquierda */}
        <div className="restaurante-text">
          <h2 className="restaurante-title">Restaurante Colonial</h2>
          <p className="restaurante-description">
            Nuestro restaurante te sumerge en un ambiente tradicional con acabados rústicos, techos altos y decoración en madera. Disfruta de platos típicos huilenses con un toque gourmet, ya sea en un desayuno campestre o una cena bajo las estrellas.
          </p>
          <button className="restaurante-button">Descubre Más</button>
        </div>

        {/* Imágenes a la derecha */}
        <div className="restaurante-images">
          <img src={plato1} alt="Plato 1" className="restaurante-image image-top" />
          <img src={plato2} alt="Plato 2" className="restaurante-image image-bottom" />
        </div>
      </div>
    </section>
  );
};

export default Restaurante;