import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contacto.scss";
import PageWrapper from "../components/PageWrapper";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <PageWrapper>
      <section className="contacto">
        <h2>Contáctanos</h2>
        <form className="contacto-formulario">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre completo" required />
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          <div className="form-group">
            <label>Asunto</label>
            <input type="text" placeholder="Asunto del mensaje" required />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea rows="5" placeholder="Escribe tu mensaje aquí..." required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
