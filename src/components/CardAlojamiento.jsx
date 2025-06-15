import '../styles/CardAlojamiento.scss';

export default function CardAlojamiento({ titulo, imagen, descripcion }) {
  return (
    <div className="card-alojamiento">
      <img src={imagen} alt={titulo} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
