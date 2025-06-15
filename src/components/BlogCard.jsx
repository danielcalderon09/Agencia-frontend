import '../styles/BlogCard.scss';

export default function BlogCard({ titulo, resumen, imagen }) {
  return (
    <div className="blog-card">
      <img src={imagen} alt={titulo} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{resumen}</p>
        <button>Leer más</button>
      </div>
    </div>
  );
}
