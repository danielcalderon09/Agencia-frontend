import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import paquete1 from '../assets/Carrusel/valleCocora.png';
import paquete2 from '../assets/ejemplo-paquete.jpg';
import paquete3 from '../assets/Carrusel/DesietoTatacoa.png';
import '../styles/Hero.scss';


const imagenes = [paquete1, paquete2, paquete3];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/planes');
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${imagenes[index]})`,
      }}
    >
      <div className="hero-boton">
        <button onClick={handleClick}>Descubre nuestros planes</button>
      </div>
    </section>
  );
}