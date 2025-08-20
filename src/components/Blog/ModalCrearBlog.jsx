import { useState } from "react";
import { toast } from "react-toastify";
import "../../styles/Blog/ModalBlog.scss";

const ModalCrearBlog = ({ onClose, onSuccess }) => {
  const [titulo, setTitulo] = useState("");
  const [resumen, setResumen] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImagen(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !resumen || !contenido) {
      toast.warn("Por favor completa todos los campos");
      return;
    }

    setEnviando(true);

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("resumen", resumen);
    formData.append("contenido", contenido);
    if (imagen) formData.append("imagen", imagen);

    try {
      const res = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al crear artículo");

      toast.success("Artículo creado con éxito");
      onSuccess(); // recarga lista
      onClose();   // cierra modal
    } catch (err) {
      console.error(err);
      toast.error("Error al crear el artículo");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-blog">
        <h2>Nuevo Artículo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Resumen breve"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
            required
          />
          <textarea
            placeholder="Contenido del artículo"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
            rows={6}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImagenChange}
          />

          {preview && (
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <img
                src={preview}
                alt="Previsualización"
                className="preview-blog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              />
            </div>
          )}

          <div className="acciones">
            <button type="submit" disabled={enviando}>
              {enviando ? "Guardando..." : "Guardar"}
            </button>
            <button type="button" onClick={onClose} disabled={enviando}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCrearBlog;
