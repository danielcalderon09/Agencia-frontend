import { useState } from "react";
import { toast } from "react-toastify";
import "../../styles/ModalEditarDia.scss";

const ModalEditarDia = ({ planId, dia, onClose, onSuccess }) => {
  const [subtitulo, setSubtitulo] = useState(dia.subtitulo || "");
  const [descripcion, setDescripcion] = useState(dia.descripcion || "");
  const [imagenesActuales, setImagenesActuales] = useState(dia.imagenes || []);
  const [nuevasImagenes, setNuevasImagenes] = useState([]);
  const [previewNuevas, setPreviewNuevas] = useState([]);

  const handleImagenChange = (e) => {
    const archivos = Array.from(e.target.files);
    setNuevasImagenes(prev => [...prev, ...archivos]);
    const nuevasUrls = archivos.map(file => URL.createObjectURL(file));
    setPreviewNuevas(prev => [...prev, ...nuevasUrls]);
  };

  const eliminarImagenActual = (url) => {
    setImagenesActuales(prev => prev.filter(img => img !== url));
    toast.info("🗑 Imagen eliminada del día");
  };

  const eliminarPreviewNueva = (index) => {
    setPreviewNuevas(prev => prev.filter((_, i) => i !== index));
    setNuevasImagenes(prev => prev.filter((_, i) => i !== index));
    toast.info("🗑 Imagen nueva eliminada");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subtitulo", subtitulo);
    formData.append("descripcion", descripcion);
    formData.append("imagenesExistentes", JSON.stringify(imagenesActuales));
    nuevasImagenes.forEach(file => formData.append("imagenes", file));

    try {
      const res = await fetch(`http://localhost:5000/api/planes/${planId}/itinerario/${dia.dia}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        toast.success("✅ Día actualizado correctamente");
        onSuccess();
        onClose();
      } else {
        toast.error("❌ Error al actualizar el día");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("❌ Error del servidor");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Editar Día {dia.dia}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Subtítulo del día"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
          />
          <textarea
            placeholder="Descripción del día"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={4}
          />

          <label>Imágenes actuales:</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "1rem" }}>
            {imagenesActuales.map((img, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={`http://localhost:5000${img}`}
                  alt={`img-dia-${index}`}
                  style={{ width: 100, height: 70, objectFit: "cover", borderRadius: 6 }}
                />
                <button
                  type="button"
                  onClick={() => eliminarImagenActual(img)}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "#f44336",
                    border: "none",
                    color: "white",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <label>Nuevas imágenes:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagenChange}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "0.5rem" }}>
            {previewNuevas.map((img, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={img}
                  alt={`preview-dia-${index}`}
                  style={{ width: 100, height: 70, objectFit: "cover", borderRadius: 6 }}
                />
                <button
                  type="button"
                  onClick={() => eliminarPreviewNueva(index)}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "#f44336",
                    border: "none",
                    color: "white",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="modal-actions">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarDia;
