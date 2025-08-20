import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarUsuario from "../components/Usuarios/NavbarUsuario";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import "../styles/BlogDetalle.scss";

export default function BlogDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const [articulo, setArticulo] = useState(null);
  const [error, setError] = useState(null);

  const esUsuario = location.pathname.includes("/usuario/");

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("No se encontró el artículo");
        return res.json();
      })
      .then((data) => setArticulo(data))
      .catch((err) => {
        console.error("Error cargando artículo:", err);
        setError(err.message);
      });
  }, [id]);

  if (error)
    return <p style={{ padding: "2rem", color: "red" }}>❌ {error}</p>;
  if (!articulo)
    return <p style={{ padding: "2rem" }}>Cargando artículo...</p>;

  return (
    <>
      {esUsuario ? <NavbarUsuario /> : <Navbar />}
      <PageWrapper>
        <div className="blog-detalle">
          <h2 className="titulo-articulo">{articulo.titulo}</h2>
          <div className="contenido-container">
            {articulo.imagen && (
              <img
                src={`http://localhost:5000${articulo.imagen}`}
                alt={articulo.titulo}
                className="imagen-detalle"
              />
            )}
            <div className="texto">
              <p>{articulo.contenido}</p>
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
