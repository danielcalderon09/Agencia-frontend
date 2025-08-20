import { Link } from "react-router-dom";
import "../styles/PagoExitoso.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagoExitoso = () => {
  return (
    <>
      <Navbar />
      <div className="pago-exitoso">
        <div className="contenido">
          <img src="/check.svg" alt="Pago exitoso" />
          <h1>¡Gracias por tu afiliación!</h1>
          <p>Tu pago se ha procesado correctamente.</p>
          <p>Muy pronto recibirás un correo con tu usuario y contraseña.</p>
          <Link to="/" className="btn-volver">
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PagoExitoso;
