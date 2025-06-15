import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">🌵 Colonial Travel</div>
      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/alojamientos">Alojamientos</Link></li>
        <li><Link to="/planes">Planes Turísticos</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/afiliados" className="afiliado-btn">Afiliados</Link></li>
      </ul>
    </nav>
  );
}
