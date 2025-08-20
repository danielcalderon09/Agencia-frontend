import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.scss";
import Navbar from "../components/Navbar";

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/afiliados/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contraseña })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión");
        return;
      }

      const afiliado = data.afiliado;
      localStorage.setItem("token", data.token);
      localStorage.setItem("afiliado", JSON.stringify(afiliado));

      // Redirige según el rol
      if (afiliado.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/usuario/inicio");
      }

    } catch (err) {
      console.error("Error al conectar:", err);
      setError("Error del servidor");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}
