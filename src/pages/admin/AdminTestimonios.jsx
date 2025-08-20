import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ModalCrearTestimonio from "../../components/Testimonios/ModalCrearTestimonio";
import ModalEditarTestimonio from "../../components/Testimonios/ModalEditarTestimonio";
import "../../styles/Testimonios/Testimonios.scss";

const AdminTestimonios = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [modalCrear, setModalCrear] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [testimonioActual, setTestimonioActual] = useState(null);

  const obtenerTestimonios = async () => {
    const res = await fetch("http://localhost:5000/api/testimonios");
    const data = await res.json();
    setTestimonios(data);
  };

  const eliminarTestimonio = async (id) => {
    if (confirm("¿Eliminar testimonio?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/testimonios/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Error al eliminar");
        toast.success("Testimonio eliminado correctamente");
        obtenerTestimonios();
      } catch (err) {
        toast.error("Error al eliminar el testimonio");
      }
    }
  };

  useEffect(() => {
    obtenerTestimonios();
  }, []);

  const handleSuccessCrear = () => {
    obtenerTestimonios();
    setModalCrear(false);
    toast.success("Testimonio creado con éxito");
  };

  const handleSuccessEditar = () => {
    obtenerTestimonios();
    setModalEditar(false);
    setTestimonioActual(null);
    toast.success("Testimonio actualizado con éxito");
  };

  return (
    <div className="testimonios-admin">
      <div className="admin-header">
        <h2>Gestión de Testimonios</h2>
        <button className="crear-btn" onClick={() => setModalCrear(true)}>
          + Crear Testimonio
        </button>
      </div>

      <div className="lista-testimonios">
        {testimonios.map((testimonio) => (
          <div className="testimonio-card" key={testimonio._id}>
            <img
              src={`http://localhost:5000${testimonio.imagen}`}
              alt={testimonio.nombre}
            />
            <h4>{testimonio.nombre}</h4>
            <p>{testimonio.opinion}</p>
            <div className="acciones">
              <button
                className="editar"
                onClick={() => {
                  setTestimonioActual(testimonio);
                  setModalEditar(true);
                }}
              >
                Editar
              </button>
              <button
                className="eliminar"
                onClick={() => eliminarTestimonio(testimonio._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalCrear && (
        <ModalCrearTestimonio
          onClose={() => setModalCrear(false)}
          onSuccess={handleSuccessCrear}
        />
      )}

      {modalEditar && (
        <ModalEditarTestimonio
          testimonio={testimonioActual}
          onClose={() => {
            setModalEditar(false);
            setTestimonioActual(null);
          }}
          onSuccess={handleSuccessEditar}
        />
      )}
    </div>
  );
};

export default AdminTestimonios;
