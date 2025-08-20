import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../styles/ReservaPlan.scss";

const ReservaPlan = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/planes/${id}`)
      .then((res) => res.json())
      .then((data) => setPlan(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!plan) return <p className="cargando">Cargando plan...</p>;

  // Datos para el iframe
  const amountInCents = plan.precio * 100;
  const reference = `RESERVA-${plan._id}-${Date.now()}`;
  const redirectUrl = encodeURIComponent("http://localhost:5173/pago/exitoso");

  const iframeUrl = `https://checkout.wompi.co/p/?public-key=pub_prod_2O3r7JeZbr9YrH5v464bV5HXj2MFBIyP&currency=COP&amount-in-cents=${amountInCents}&reference=${reference}&redirect-url=${redirectUrl}`;

  return (
    <div className="reserva-plan">
      <div className="card">
        <div className="info">
          <h1>Reserva: {plan.titulo}</h1>
          <img src={`http://localhost:5000${plan.imagenes[0]}`} alt={plan.titulo} />
          <p>{plan.descripcionCorta}</p>
          <p className="precio">Precio: ${plan.precio.toLocaleString("es-CO")} COP</p>
        </div>

        <div className="formulario">
          <iframe
            src={iframeUrl}
            width="100%"
            height="520"
            frameBorder="0"
            title="Checkout Wompi"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ReservaPlan;
