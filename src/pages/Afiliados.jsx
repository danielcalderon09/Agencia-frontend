import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Afiliados.scss";
import PageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router-dom";

export default function Afiliados() {
  const navigate = useNavigate();

  const handlePago = () => {
    navigate("/afiliacion/pago");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="afiliados">
          <div className="acciones-superiores">
            <button className="btn azul" onClick={handlePago}>
              💰 Hacer pago de afiliación
            </button>
            <button className="btn oscuro" onClick={handleLogin}>
              🔐 Iniciar sesión
            </button>
          </div>

          <h1 className="titulo">Conviértete en Afiliado Colonial</h1>

          <div className="info-cajas">
            <div className="caja">
              <h2>🎁 Beneficios exclusivos del afiliado:</h2>
              <ul>
                <li>✅ Reservas personalizadas y atención exclusiva</li>
                <li>✅ El valor de la afiliación se redime en 4 noches en el hotel Colonial Villavieja (sujeto a disponibilidad)</li>
                <li>✅ Descuentos especiales en alojamiento en el hotel Colonial Villavieja y tour al desierto de la Tatacoa</li>
                <li>✅ Descuentos especiales en hoteles nacionales con convenio (sujeto a disponibilidad)</li>
              </ul>
            </div>

            <div className="caja">
              <h2>📄 Condiciones de afiliación:</h2>
              <ul>
                <li>💳 Pago único de afiliación: <strong>$240.000</strong></li>
                <li>⏱️ Vigencia: 1 año desde la fecha de afiliación</li>
                <li>🔐 Acceso personalizado con login para obtener los beneficios</li>
              </ul>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
