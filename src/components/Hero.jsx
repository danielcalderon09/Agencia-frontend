import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Hero.scss';

import video1 from '../assets/Hero/DesiertoRojo.mp4';
import video2 from '../assets/Hero/DesiertoGris-1.mp4';
import video3 from '../assets/Hero/DesiertoGris-2.mp4';

const videos = [video1, video2, video3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [activeVideo, setActiveVideo] = useState('A');

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isAfiliado = location.pathname.startsWith("/usuario");

  const rutas = isAfiliado
    ? {
        alojamiento: "/usuario/alojamiento",
        planes: "/usuario/planesturisticos",
        blog: "/usuario/blog",
        contacto: "/usuario/contacto"
      }
    : {
        alojamiento: "/alojamientos",
        planes: "/planes",
        blog: "/blog",
        contacto: "/contacto"
      };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % videos.length;
      const currentRef = activeVideo === 'A' ? videoRefA.current : videoRefB.current;
      const nextRef = activeVideo === 'A' ? videoRefB.current : videoRefA.current;

      nextRef.src = videos[nextIndex];
      nextRef.load();

      nextRef.oncanplaythrough = () => {
        nextRef.play();
        setFadeIn(true); // activa animación fade-in

        setTimeout(() => {
          setActiveVideo(prev => (prev === 'A' ? 'B' : 'A'));
          setCurrentIndex(nextIndex);
        }, 100); // esperar que comience fade antes del cambio
      };
    }, 8000);

    return () => clearTimeout(timeout);
  }, [currentIndex, activeVideo]);

  return (
    <section className="hero">
      <video
        ref={videoRefA}
        className={`video-fondo ${activeVideo === 'A' ? 'fade-in' : 'fade-out'}`}
        src={activeVideo === 'A' ? videos[currentIndex] : ''}
        autoPlay
        muted
        playsInline
      />
      <video
        ref={videoRefB}
        className={`video-fondo ${activeVideo === 'B' ? 'fade-in' : 'fade-out'}`}
        src={activeVideo === 'B' ? videos[currentIndex] : ''}
        autoPlay
        muted
        playsInline
      />

      <div className="overlay">
        <div className="contenido">
          <h1>Descubre Colombia con Colonial Travel</h1>
          <p>Explora paisajes únicos, cultura vibrante y aventuras inolvidables.</p>
          <div className="botones-rapidos">
            <button onClick={() => navigate(rutas.alojamiento)}>🏨 Alojamientos</button>
            <button onClick={() => navigate(rutas.planes)}>🌄 Planes turísticos</button>
            <button onClick={() => navigate(rutas.blog)}>📖 Blog</button>
            <button onClick={() => navigate(rutas.contacto)}>📩 Contáctanos</button>
          </div>
        </div>
      </div>
    </section>
  );
}
