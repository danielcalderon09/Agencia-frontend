import { useEffect, useState } from "react";
import "../../styles/Usuarios/AdminUsuarios.scss";
import ModalCrearUsuario from "../../components/Usuarios/ModalCrearUsuarios";
import ModalEditarUsuario from "../../components/Usuarios/ModalEditarUsuarios";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModalCrear, setMostrarModalCrear] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState(null);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/usuarios");
      const data = await res.json();
      setUsuarios(data);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
    }
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/usuarios/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Usuario eliminado correctamente");
        obtenerUsuarios();
      } else {
        toast.error("Error al eliminar usuario");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Error al conectar con el servidor");
    }
  };

  return (
    <div className="admin-usuarios">
      <div className="admin-usuarios-header">
        <h2>Gestión de Usuarios</h2>
        <button onClick={() => setMostrarModalCrear(true)}>
          <FaUserPlus /> Nuevo Usuario
        </button>
      </div>

      <div className="usuarios-tabla">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>Pago</th>
              <th>Fecha de Pago</th>
              <th>Fecha de Vencimiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan="8">No hay usuarios registrados</td>
              </tr>
            ) : (
              usuarios.map((usuario) => (
                <tr key={usuario._id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.celular}</td>
                  <td>{usuario.pago}</td>
                  <td>{new Date(usuario.fechaPago).toLocaleDateString()}</td>
                  <td>{new Date(usuario.fechaVencimiento).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => setUsuarioEditar(usuario)}>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleEliminar(usuario._id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modales */}
      {mostrarModalCrear && (
        <ModalCrearUsuario
  onClose={() => setMostrarModalCrear(false)}
  onGuardar={obtenerUsuarios}
/>
      )}

      {usuarioEditar && (
        <ModalEditarUsuario
  usuario={usuarioEditar}
  onClose={() => setUsuarioEditar(null)}
  onGuardar={obtenerUsuarios}
/>
      )}
    </div>
  );
}
