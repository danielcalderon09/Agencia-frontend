import { useState } from "react";
import "../../styles/Admin.scss";

const ModalCrearPlan = ({ onClose, onSuccess, tipo }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcionCorta, setDescripcionCorta] = useState("");
  const [descripcionLarga, setDescripcionLarga] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [cantidadDias, setCantidadDias] = useState(1);

  const handleImagenChange = (e) => {
    const files = Array.from(e.target.files);
    setImagenes(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !descripcionCorta || !descripcionLarga || !precio) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcionCorta", descripcionCorta);
    formData.append("descripcionLarga", descripcionLarga);
    formData.append("precio", precio);
    formData.append("tipo", tipo);

    // Solo agregar itinerario si es un plan
    if (tipo === "plan") {
      const itinerario = Array.from({ length: cantidadDias }, (_, i) => ({
        dia: i + 1,
        subtitulo: "Por definir",
        descripcion: "Por definir",
        imagenes: [],
      }));
      formData.append("itinerario", JSON.stringify(itinerario));
    }

    // Agregar imágenes
    imagenes.forEach(file => formData.append("imagenes", file));

    try {
      const res = await fetch("http://localhost:5000/api/planes", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        onSuccess();
      } else {
        const error = await res.json();
        console.error("Error al crear plan:", error);
        alert("❌ Error al crear plan");
      }
    } catch (error) {
      console.error("Error del servidor:", error);
      alert("❌ Error del servidor al crear plan");
    }
  };

  const estiloBoton = {
    backgroundColor: tipo === "tour" ? "#3b82f6" : "#06d6a0",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "opacity 0.3s",
  };

  const estiloCancelar = {
    backgroundColor: "#eee",
    color: "#333",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "opacity 0.3s",
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{tipo === "tour" ? "Nuevo Tour" : "Nuevo Plan Turístico"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción corta"
            value={descripcionCorta}
            onChange={e => setDescripcionCorta(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción larga"
            value={descripcionLarga}
            onChange={e => setDescripcionLarga(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            min={0}
            onChange={e => setPrecio(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagenChange}
          />

          {previewUrls.length > 0 && (
            <div className="preview-imagenes" style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {previewUrls.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`preview-${idx}`}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 6,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)"
                  }}
                />
              ))}
            </div>
          )}

          {tipo === "plan" && (
            <>
              <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
              <label style={{ fontWeight: "bold" }}>Cantidad de días:</label>
              <input
                type="number"
                min={1}
                value={cantidadDias}
                onChange={e => setCantidadDias(parseInt(e.target.value))}
                required
              />
            </>
          )}

          <div className="modal-actions" style={{ marginTop: "1.2rem", display: "flex", gap: "1rem" }}>
            <button type="submit" style={estiloBoton}>
              Crear
            </button>
            <button type="button" onClick={onClose} style={estiloCancelar}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCrearPlan;
