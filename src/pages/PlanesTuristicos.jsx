import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Planes/PlanesTuristicos.scss';
import CardTour from '../components/Planes/CardTour';

export default function PlanesTuristicos() {
  const [planes, setPlanes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/planes');
        if (!res.ok) throw new Error("No se pudo cargar la información");
        const data = await res.json();
        setPlanes(data);
      } catch (err) {
        console.error("Error cargando planes:", err);
        setError("Ocurrió un error al cargar los planes turísticos.");
      } finally {
        setCargando(false);
      }
    };

    fetchPlanes();
  }, []);

  const planesTuristicos = planes.filter(p => p.tipo === "plan");
  const tours = planes.filter(p => p.tipo === "tour");

  return (
    <>
      <Navbar />
      <section className="planes-container">
        <h2 className="titulo">Planes Turísticos</h2>

        {cargando ? (
          <p>Cargando planes...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <div className="seccion-planes">
              {planesTuristicos.length > 0 ? (
                <div className="planes-grid">
                  {planesTuristicos.map((plan) => (
                    <CardTour
                      key={plan._id}
                      plan={plan}
                      onClick={() => navigate(`/planes/${plan._id}`)}
                    />
                  ))}
                </div>
              ) : (
                <p>No hay planes turísticos disponibles por ahora.</p>
              )}
            </div>

            <div className="seccion-planes">
              <h3 className='titulo'>🚌 Tours</h3>
              {tours.length > 0 ? (
                <div className="planes-grid">
                  {tours.map((tour) => (
                    <CardTour
                      key={tour._id}
                      plan={tour}
                      onClick={() => navigate(`/planes/${tour._id}`)}
                    />
                  ))}
                </div>
              ) : (
                <p>No hay tours disponibles por ahora.</p>
              )}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}
