import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../../styles/Navbar.scss";

export default function NavbarUsuario() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("afiliado");
    navigate("/login");
  };

  return (
    <nav className={`navbar navbar-usuario ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">🌵 Colonial Travel</div>
      <ul className="menu">
        <li><Link to="/usuario/inicio">Inicio</Link></li>
        <li><Link to="/usuario/alojamiento">Alojamientos</Link></li>
        <li><Link to="/usuario/planesturisticos">Planes Turísticos</Link></li>
        <li><Link to="/usuario/blog">Blog</Link></li>
        <li><Link to="/usuario/contacto">Contacto</Link></li>
        <li>
          <button onClick={handleCerrarSesion} className="cerrar-sesion-btn">
            Cerrar sesión
          </button>
        </li>
      </ul>
    </nav>
  );
}
