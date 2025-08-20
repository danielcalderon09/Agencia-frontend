// src/components/SeAfiliado.jsx
import { useNavigate } from "react-router-dom";
import "../styles/SeAfiliado.scss";
import fondo from "../assets/Blog/manoGigante.jpg"; // Usa una imagen de fondo atractiva

export default function SeAfiliado() {
  const navigate = useNavigate();

  return (
    <section
      className="se-afiliado"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="overlay" />
      <div className="contenido">
        <h2>¿Quieres disfrutar más beneficios?</h2>
        <p>
          Conviértete en afiliado y accede a planes exclusivos, descuentos y experiencias únicas.
        </p>
        <button onClick={() => navigate("/afiliados")}>Únete ahora</button>
      </div>
    </section>
  );
}
