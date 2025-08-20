import { useState } from "react";
import "../../styles/Testimonios/ModalTestimonio.scss";
import { toast } from "react-toastify";

const ModalEditarTestimonio = ({ testimonio, onClose, onSuccess }) => {
  const [nombre, setNombre] = useState(testimonio.nombre);
  const [opinion, setOpinion] = useState(testimonio.opinion);
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(`http://localhost:5000${testimonio.imagen}`);
  const [enviando, setEnviando] = useState(false);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    if (file) {
      setPreview(URL.createObjectURL(file)); // Mostrar nueva imagen
    } else {
      setPreview(`http://localhost:5000${testimonio.imagen}`); // Si se deselecciona
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("opinion", opinion);
    if (imagen) formData.append("imagen", imagen);

    try {
      const res = await fetch(`http://localhost:5000/api/testimonios/${testimonio._id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al actualizar");

      
      onSuccess(); // recargar lista
      onClose();   // cerrar modal
    } catch (err) {
      toast.error("Error al actualizar el testimonio");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-testimonio">
        <h2>Editar Testimonio</h2>
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
          <input type="file" accept="image/*" onChange={handleImagenChange} />

          {preview && (
            <img src={preview} alt="Previsualización" className="preview" />
          )}

          <div className="acciones">
            <button type="submit" className="guardar" disabled={enviando}>
              {enviando ? "Guardando..." : "Guardar Cambios"}
            </button>
            <button type="button" className="cancelar" onClick={onClose} disabled={enviando}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarTestimonio;
