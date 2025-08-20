import { useState, useEffect } from "react";
import "../../styles/Usuarios/ModalUsuario.scss";

export default function ModalEditarUsuario({ usuario, onClose, onGuardar }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    pago: "Pendiente",
    fechaPago: "",
    fechaVencimiento: ""
  });

  useEffect(() => {
    if (usuario) {
      setForm({
        nombre: usuario.nombre || "",
        apellido: usuario.apellido || "",
        correo: usuario.correo || "",
        celular: usuario.celular || "",
        pago: usuario.pago || "Pendiente",
        fechaPago: usuario.fechaPago?.slice(0, 10) || "",
        fechaVencimiento: usuario.fechaVencimiento?.slice(0, 10) || ""
      });
    }
  }, [usuario]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/usuarios/${usuario._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        onGuardar();
        onClose();
      } else {
        alert("Error al actualizar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="modal-usuario">
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Celular</label>
            <input
              type="text"
              name="celular"
              value={form.celular}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Estado del Pago</label>
            <select name="pago" value={form.pago} onChange={handleChange}>
              <option value="Pendiente">Pendiente</option>
              <option value="Pagado">Pagado</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fecha de Pago</label>
            <input
              type="date"
              name="fechaPago"
              value={form.fechaPago}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Fecha de Vencimiento</label>
            <input
              type="date"
              name="fechaVencimiento"
              value={form.fechaVencimiento}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-footer">
          <button type="button" className="cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="guardar">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
