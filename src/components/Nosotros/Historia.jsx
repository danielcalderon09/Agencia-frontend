import '../../styles/Nosotros/Historia.scss';
import historiaImg from '../../assets/Blog/desiertoTatacoa.jpg'; // Puedes cambiar la imagen

export default function Historia() {
  return (
    <section className="historia">
      <div className="contenedor">
        <div className="imagen">
          <img src={historiaImg} alt="Historia Colonial Travel" />
        </div>
        <div className="texto">
          <h2>Nuestra Historia</h2>
          <p>
            Colonial Travel nació con una pasión: conectar a las personas con los lugares más mágicos de Colombia. Desde nuestros comienzos, hemos trabajado para que cada viaje sea una experiencia auténtica y transformadora.
          </p>
          <p>
            Hoy, seguimos explorando junto a nuestros viajeros, promoviendo el turismo sostenible, el respeto por la cultura y el amor por la naturaleza.
          </p>
        </div>
      </div>
    </section>
  );
}