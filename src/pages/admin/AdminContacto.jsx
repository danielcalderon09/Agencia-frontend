import { useEffect, useState } from "react";
import "../../styles/Contacto/AdminContacto.scss";
import { FaEnvelope, FaUser, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AdminContacto() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetchMensajes();
  }, []);

  const fetchMensajes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contacto");
      const data = await res.json();
      setMensajes(data);
    } catch (err) {
      console.error("Error al cargar mensajes:", err);
    }
  };

  const eliminarMensaje = async (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar este mensaje?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/contacto/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMensajes((prev) => prev.filter((msg) => msg._id !== id));
        toast.success("Mensaje eliminado correctamente");
      } else {
        toast.error("No se pudo eliminar el mensaje");
      }
    } catch (error) {
      console.error("Error eliminando mensaje:", error);
      toast.error("Error al conectar con el servidor");
    }
  };

  return (
    <div className="admin-contacto">
      <h2>Mensajes de Contacto</h2>
      {mensajes.length === 0 ? (
        <p>No hay mensajes todavía.</p>
      ) : (
        <div className="mensajes-grid">
          {mensajes.map((msg) => (
            <div key={msg._id} className="mensaje-card">
              <h3><FaUser /> {msg.nombre}</h3>
              <p><FaEnvelope /> {msg.correo}</p>
              <p><strong>Asunto:</strong> {msg.asunto}</p>
              <p>{msg.mensaje}</p>
              <span className="fecha">
                <FaCalendarAlt /> {new Date(msg.creadoEn).toLocaleString()}
              </span>
              <button className="btn-eliminar" onClick={() => eliminarMensaje(msg._id)}>
                <FaTrash /> Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
