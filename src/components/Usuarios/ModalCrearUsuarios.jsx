import { useState } from "react";
import "../../styles/Usuarios/ModalUsuario.scss";
import { toast } from "react-toastify";

export default function ModalCrearUsuario({ onClose, onGuardar }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    pago: "Pendiente",
    fechaPago: "",
    fechaVencimiento: ""
  });

  const [guardando, setGuardando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Forzar que pago sea siempre string
    if (name === "pago") {
      setForm({ ...form, pago: value }); // value será "Pendiente" o "Pagado"
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGuardando(true);

    try {
      const res = await fetch("http://localhost:5000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        toast.success("Usuario creado correctamente");
        onGuardar();  // Actualiza lista
        onClose();    // Cierra modal
      } else {
        const data = await res.json();
        toast.error(data.mensaje || "Error al crear usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al conectar con el servidor");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="modal-usuario">
      <h2>Crear Usuario</h2>
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
          <button type="submit" className="guardar" disabled={guardando}>
            {guardando ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}
