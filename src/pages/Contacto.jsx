import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contacto.scss";
import PageWrapper from "../components/PageWrapper";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviado(false);

    try {
      const res = await fetch("http://localhost:5000/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setEnviado(true);
        setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
      } else {
        alert("Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="contacto">
          <h2>Contáctanos</h2>
          <form className="contacto-formulario" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Asunto</label>
              <input
                type="text"
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
            {enviado && <p className="mensaje-exito">✅ Mensaje enviado con éxito.</p>}
          </form>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
