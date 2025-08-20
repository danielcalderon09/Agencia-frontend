import { useEffect, useState } from "react";
import CrearPlanModal from "../../components/Admin/ModalCrearPlan";
import ModalEditarPlan from "../../components/Admin/ModalEditarPlan";
import ModalEditarDia from "../../components/Admin/ModalEditarDia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Admin.scss";

const AdminPlanes = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tipoNuevo, setTipoNuevo] = useState("");
  const [planEditar, setPlanEditar] = useState(null);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [planes, setPlanes] = useState([]);

  const obtenerPlanes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/planes");
      const data = await res.json();
      setPlanes(data);
    } catch (err) {
      console.error("Error al obtener planes:", err);
      toast.error("❌ Error al obtener planes");
    }
  };

  useEffect(() => {
    obtenerPlanes();
  }, []);

  const handlePlanCreado = async () => {
    await obtenerPlanes();
    toast.success("✅ Plan creado correctamente");
    setMostrarModal(false);
    setTipoNuevo("");
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este plan?");
    if (!confirmar) return;

    try {
      const res = await fetch(`http://localhost:5000/api/planes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        await obtenerPlanes();
        toast.success("🗑 Plan eliminado correctamente");
      } else {
        const data = await res.json();
        toast.error(data.error || "❌ Error al eliminar el plan");
      }
    } catch (err) {
      console.error("Error al eliminar:", err);
      toast.error("❌ Error del servidor al eliminar");
    }
  };

  const handlePlanActualizado = async () => {
    await obtenerPlanes();
    toast.success("✏️ Plan actualizado correctamente");
    setPlanEditar(null);
  };

  const abrirModalDia = (plan, diaObj) => {
    setPlanSeleccionado(plan);
    setDiaSeleccionado(diaObj);
  };

  const renderItinerario = (plan) => {
    if (plan.tipo !== "plan" || !plan.itinerario || plan.itinerario.length === 0) return null;

    return (
      <div className="dias-itinerario" style={{ marginTop: "0.5rem" }}>
        <strong>📅 Días del plan:</strong>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.3rem",
          }}
        >
          {plan.itinerario.map((diaObj, index) => (
            <button
              key={index}
              style={{
                padding: "4px 10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: "#f9f9f9",
                cursor: "pointer",
              }}
              onClick={() => abrirModalDia(plan, diaObj)}
            >
              Día {diaObj.dia}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const planesTuristicos = planes.filter((p) => p.tipo === "plan");
  const tours = planes.filter((p) => p.tipo === "tour");

  return (
    <div className="admin-main">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="admin-header">
        <h2>Planes Turísticos y Tours</h2>
      </div>

      {mostrarModal && (
        <CrearPlanModal
          tipo={tipoNuevo}
          onClose={() => {
            setMostrarModal(false);
            setTipoNuevo("");
          }}
          onSuccess={handlePlanCreado}
        />
      )}

      {planEditar && (
        <ModalEditarPlan
          plan={planEditar}
          onClose={() => setPlanEditar(null)}
          onUpdate={handlePlanActualizado}
        />
      )}

      {planSeleccionado && diaSeleccionado && (
        <ModalEditarDia
          planId={planSeleccionado._id}
          dia={diaSeleccionado}
          onClose={() => {
            setPlanSeleccionado(null);
            setDiaSeleccionado(null);
          }}
          onSuccess={obtenerPlanes}
        />
      )}

      {/* Planes */}
      <div className="grupo-planes">
        <div className="grupo-header">
          <h3>🌎 Planes turísticos</h3>
          <button
            className="crear-btn crear-plan"
            onClick={() => {
              setTipoNuevo("plan");
              setMostrarModal(true);
            }}
          >
            + Nuevo Plan turístico
          </button>
        </div>

        <div className="lista-planes">
          {planesTuristicos.length > 0 ? (
            planesTuristicos.map((plan) => (
              <div key={plan._id} className="plan-card">
                {plan.imagenes?.length > 0 && (
                  <img
                    src={`http://localhost:5000${plan.imagenes[0]}`}
                    alt={plan.titulo}
                    className="plan-imagen"
                  />
                )}
                <div className="plan-info">
                  <h3>{plan.titulo}</h3>
                  <p>{plan.descripcionCorta}</p>
                  <p>
                    <strong>Precio:</strong> ${plan.precio}
                  </p>
                  {renderItinerario(plan)}
                  <div className="acciones-plan">
                    <button
                      className="btn-editar"
                      onClick={() => setPlanEditar(plan)}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      className="btn-eliminar"
                      onClick={() => handleEliminar(plan._id)}
                    >
                      🗑 Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="texto-vacio">No hay planes turísticos registrados.</p>
          )}
        </div>
      </div>

      {/* Tours */}
      <div className="grupo-planes">
        <div className="grupo-header">
          <h3>🚌 Tours</h3>
          <button
            className="crear-btn crear-tour"
            onClick={() => {
              setTipoNuevo("tour");
              setMostrarModal(true);
            }}
          >
            + Nuevo Tour
          </button>
        </div>

        <div className="lista-planes">
          {tours.length > 0 ? (
            tours.map((plan) => (
              <div key={plan._id} className="plan-card">
                {plan.imagenes?.length > 0 && (
                  <img
                    src={`http://localhost:5000${plan.imagenes[0]}`}
                    alt={plan.titulo}
                    className="plan-imagen"
                  />
                )}
                <div className="plan-info">
                  <h3>{plan.titulo}</h3>
                  <p>{plan.descripcionCorta}</p>
                  <p>
                    <strong>Precio:</strong> ${plan.precio}
                  </p>
                  <div className="acciones-plan">
                    <button
                      className="btn-editar"
                      onClick={() => setPlanEditar(plan)}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      className="btn-eliminar"
                      onClick={() => handleEliminar(plan._id)}
                    >
                      🗑 Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="texto-vacio">No hay tours registrados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPlanes;
