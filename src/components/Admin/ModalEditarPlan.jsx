import { useState } from "react";
import "../../styles/Admin.scss";

const ModalEditarPlan = ({ plan, onClose, onUpdate }) => {
  const [titulo, setTitulo] = useState(plan.titulo);
  const [descripcionCorta, setDescripcionCorta] = useState(plan.descripcionCorta);
  const [descripcionLarga, setDescripcionLarga] = useState(plan.descripcionLarga);
  const [precio, setPrecio] = useState(plan.precio);
  const [imagenesActuales, setImagenesActuales] = useState(plan.imagenes || []);
  const [nuevasImagenes, setNuevasImagenes] = useState([]);
  const [previewNuevas, setPreviewNuevas] = useState([]);
  const [itinerario, setItinerario] = useState(plan.itinerario || []);
  const tipo = plan.tipo; // 🔒 No editable

  const handleImagenChange = (e) => {
    const archivos = Array.from(e.target.files);
    setNuevasImagenes((prev) => [...prev, ...archivos]);
    const nuevasUrls = archivos.map(file => URL.createObjectURL(file));
    setPreviewNuevas((prev) => [...prev, ...nuevasUrls]);
  };

  const eliminarImagenActual = (url) => {
    setImagenesActuales(prev => prev.filter(img => img !== url));
  };

  const eliminarPreviewNueva = (index) => {
    setPreviewNuevas(prev => prev.filter((_, i) => i !== index));
    setNuevasImagenes(prev => prev.filter((_, i) => i !== index));
  };

  const actualizarDescripcionDia = (index, descripcion) => {
    const copia = [...itinerario];
    copia[index].descripcion = descripcion;
    setItinerario(copia);
  };

  const agregarDia = () => {
    setItinerario([...itinerario, { dia: itinerario.length + 1, descripcion: "" }]);
  };

  const eliminarDia = (index) => {
    const copia = [...itinerario];
    copia.splice(index, 1);
    setItinerario(copia.map((d, i) => ({ dia: i + 1, descripcion: d.descripcion })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcionCorta", descripcionCorta);
    formData.append("descripcionLarga", descripcionLarga);
    formData.append("precio", precio);
    formData.append("tipo", tipo);

    if (tipo === "plan") {
      formData.append("itinerario", JSON.stringify(itinerario));
    }

    imagenesActuales.forEach(img => formData.append("imagenesExistentes", img));
    nuevasImagenes.forEach(file => formData.append("imagenes", file));

    try {
      const res = await fetch(`http://localhost:5000/api/planes/${plan._id}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        onUpdate();
      } else {
        console.error("❌ Error al actualizar el plan");
        alert("❌ Error al actualizar el plan");
      }
    } catch (err) {
      console.error("❌ Error en la solicitud:", err);
      alert("❌ Error del servidor al actualizar");
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
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{tipo === "tour" ? "Editar Tour" : "Editar Plan Turístico"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción Corta"
            value={descripcionCorta}
            onChange={e => setDescripcionCorta(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción Larga"
            value={descripcionLarga}
            onChange={e => setDescripcionLarga(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
            required
            min={0}
          />

          <label>Imágenes actuales:</label>
          <div className="preview-imagenes">
            {imagenesActuales.map((img, index) => (
              <div key={index} className="preview-item">
                <img src={`http://localhost:5000${img}`} alt={`img-${index}`} />
                <button type="button" onClick={() => eliminarImagenActual(img)}>×</button>
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
          <div className="preview-imagenes">
            {previewNuevas.map((url, index) => (
              <div key={index} className="preview-item">
                <img src={url} alt={`preview-${index}`} />
                <button type="button" onClick={() => eliminarPreviewNueva(index)}>×</button>
              </div>
            ))}
          </div>

          {tipo === "plan" && (
            <>
              <hr style={{ margin: "1rem 0" }} />
              <label style={{ fontWeight: "bold" }}>Itinerario del Plan:</label>
              {itinerario.map((dia, index) => (
                <div key={index} style={{ marginBottom: "0.8rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={{ fontWeight: "bold" }}>Día {index + 1}</label>
                    <button type="button" onClick={() => eliminarDia(index)} style={{ color: "#f44336", fontWeight: "bold" }}>×</button>
                  </div>
                  <textarea
                    placeholder={`Descripción del Día ${index + 1}`}
                    value={dia.descripcion}
                    onChange={(e) => actualizarDescripcionDia(index, e.target.value)}
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={agregarDia}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "0.4rem 1rem",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  marginBottom: "1rem"
                }}
              >
                ➕ Agregar Día
              </button>
            </>
          )}

          <div className="modal-actions">
            <button type="submit" style={estiloBoton}>
              Actualizar
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

export default ModalEditarPlan;
