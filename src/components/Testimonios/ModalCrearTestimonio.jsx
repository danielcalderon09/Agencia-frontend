import { useState } from "react";
import "../../styles/Testimonios/ModalTestimonio.scss";
import { toast } from "react-toastify";

const ModalCrearTestimonio = ({ onClose, onSuccess }) => {
  const [nombre, setNombre] = useState("");
  const [opinion, setOpinion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("opinion", opinion);
    if (imagen) formData.append("imagen", imagen);

    try {
      const res = await fetch("http://localhost:5000/api/testimonios", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al guardar");

      toast.success("Testimonio creado con éxito");
      onSuccess(); // Recargar lista
      onClose();   // Cerrar modal
    } catch (err) {
      toast.error("Hubo un error al guardar el testimonio");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-testimonio">
        <h2>Nuevo Testimonio</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <textarea
            placeholder="Opinión"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            required
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {preview && (
            <img src={preview} alt="Previsualización" className="preview" />
          )}

          <div className="acciones">
            <button type="submit" className="guardar" disabled={enviando}>
              {enviando ? "Guardando..." : "Guardar"}
            </button>
            <button
              type="button"
              className="cancelar"
              onClick={onClose}
              disabled={enviando}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCrearTestimonio;
