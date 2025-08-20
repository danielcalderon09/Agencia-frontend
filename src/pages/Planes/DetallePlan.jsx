import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../../styles/Planes/DetallePlan.scss";
import Navbar from "../../components/Navbar";
import NavbarUsuario from "../../components/Usuarios/NavbarUsuario";
import Footer from "../../components/Footer";

const DetallePlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const esAfiliado = location.pathname.startsWith("/usuario");

  const [plan, setPlan] = useState(null);
  const [index, setIndex] = useState(0);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [indexDia, setIndexDia] = useState(0);

  useEffect(() => {
    const fetchPlan = async () => {
      const res = await fetch(`http://localhost:5000/api/planes/${id}`);
      const data = await res.json();
      setPlan(data);
    };
    fetchPlan();
  }, [id]);

  useEffect(() => {
    if (!plan) return;

    const isGeneral = diaSeleccionado === null;
    const imagenes = isGeneral
      ? plan.imagenes
      : plan.itinerario[diaSeleccionado]?.imagenes;

    if (imagenes?.length > 1) {
      const interval = setInterval(() => {
        isGeneral
          ? setIndex((prev) => (prev + 1) % imagenes.length)
          : setIndexDia((prev) => (prev + 1) % imagenes.length);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [plan, diaSeleccionado]);

  const handleReservar = () => {
    navigate(`/reserva/${plan._id}`);
  };

  if (!plan) return <p className="cargando">Cargando...</p>;

  const imagenActual = diaSeleccionado === null
    ? plan.imagenes?.[index]
    : plan.itinerario[diaSeleccionado]?.imagenes?.[indexDia];

  return (
    <>
      {esAfiliado ? <NavbarUsuario /> : <Navbar />}
      <div className="detalle-plan">
        <div className="contenedor">
          {diaSeleccionado !== null && (
            <div
              className="volver-arriba"
              onClick={() => setDiaSeleccionado(null)}
              title="Volver"
            >
              ⨉
            </div>
          )}

          <div className="imagen">
            {imagenActual && (
              <img
                src={`http://localhost:5000${imagenActual}`}
                alt={plan.titulo}
              />
            )}
          </div>

          <div className="info">
            <h2>{plan.titulo}</h2>

            {diaSeleccionado === null ? (
              <>
                {plan.tipo === "plan" && plan.itinerario?.length > 0 && (
                  <div className="botones-dias debajo">
                    {plan.itinerario.map((dia, i) => (
                      <button
                        key={i}
                        className={diaSeleccionado === i ? "activo" : ""}
                        onClick={() => {
                          setDiaSeleccionado(i);
                          setIndexDia(0);
                        }}
                      >
                        Día {i + 1}
                      </button>
                    ))}
                  </div>
                )}
                <p className="descripcion">{plan.descripcionLarga}</p>
                <p className="precio">
                  {esAfiliado ? "Precio afiliado" : "Precio"}: <span>${plan.precio}</span>
                </p>
                <div className="acciones">
                  <button className="btn-reservar" onClick={handleReservar}>
                    Reservar ahora
                  </button>
                  <button
                    className="btn-volver"
                    onClick={() =>
                      navigate(esAfiliado ? "/usuario/planesturisticos" : "/planes")
                    }
                  >
                    ← Volver
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4>{plan.itinerario[diaSeleccionado].subtitulo}</h4>
                <p className="descripcion">
                  {plan.itinerario[diaSeleccionado].descripcion}
                </p>
                <p className="precio">
                  {esAfiliado ? "Precio afiliado" : "Precio"}: <span>${plan.precio}</span>
                </p>
                <div className="acciones">
                  <button className="btn-reservar" onClick={handleReservar}>
                    Reservar ahora
                  </button>
                  <button
                    className="btn-volver"
                    onClick={() => setDiaSeleccionado(null)}
                  >
                    ← Volver al plan
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {!esAfiliado && <Footer />}
    </>
  );
};

export default DetallePlan;
