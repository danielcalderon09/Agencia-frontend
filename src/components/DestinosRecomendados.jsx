import '../styles/DestinosRecomendados.scss';

import desiertoTatacoa from '../assets/desiertoTatacoa.jpg';
import miradorGigante from '../assets/DestinosRecomendados/SantaMarta.jpg';
import santaMarta from '../assets/DestinosRecomendados/playa.jpg';

const destinos = [
  { nombre: 'Desierto de la Tatacoa', imagen: desiertoTatacoa },
  { nombre: 'Mirador Gigante', imagen: miradorGigante },
  { nombre: 'Santa Marta', imagen: santaMarta },
];

export default function DestinosRecomendados() {
  const handleClick = (destino) => {
    console.log(`Ver más de: ${destino}`); // Aquí luego podrías usar navigate()
  };

  return (
    <section className="destinos">
      <h2>Destinos Recomendados</h2>
      <div className="destinos-grid">
        {destinos.map((destino) => (
          <div
            key={destino.nombre}
            className="destino"
            role="button"
            tabIndex="0"
            onClick={() => handleClick(destino.nombre)}
          >
            <div className="destino-img">
              <img src={destino.imagen} alt={destino.nombre} />
            </div>
            <h3>{destino.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
