import { useNavigate, useLocation } from "react-router-dom";
import "../styles/BlogCard.scss";

export default function BlogCard({ _id, titulo, resumen, imagen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const esUsuario = location.pathname.startsWith("/usuario");

  const handleClick = () => {
    const ruta = esUsuario ? `/usuario/blog/${_id}` : `/blog/${_id}`;
    navigate(ruta);
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <div className="imagen-wrapper">
        <img src={imagen} alt={`Imagen del artículo: ${titulo}`} />
      </div>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{resumen}</p>
        <button className="leer-mas">Leer más</button>
      </div>
    </div>
  );
}
