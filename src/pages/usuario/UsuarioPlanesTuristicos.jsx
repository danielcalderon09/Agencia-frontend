import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Usuarios/NavbarUsuario";
import Footer from '../../components/Footer';
import '../../styles/Planes/PlanesTuristicos.scss';
import CardTour from '../../components/Planes/CardTour';

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

  return (
    <>
      <Navbar />
      <section className="planes-container">
        <h2 className="titulo">Planes Turísticos</h2>

        {cargando ? (
          <p>Cargando planes...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : planes.length === 0 ? (
          <p>No hay planes turísticos disponibles por ahora.</p>
        ) : (
          <div className="planes-grid">
            {planes.map((plan) => (
              <CardTour
                key={plan._id}
                plan={plan}
                onClick={() => navigate(`/planes/${plan._id}`)}
              />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
