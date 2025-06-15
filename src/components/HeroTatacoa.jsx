import '../styles/HeroTatacoa.scss';
import { useNavigate } from 'react-router-dom';
import fondo from '../assets/desiertoTatacoa.jpg';

export default function HeroTatacoa() {
  const navigate = useNavigate();

  return (
    <section className="hero-tatacoa" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="overlay">
        <h1>Explora el Desierto de la Tatacoa</h1>
        <p>Viajes únicos entre estrellas, rocas rojizas y aventuras inolvidables.</p>
        <button onClick={() => navigate('/planes')}>Descubre nuestros planes</button>
      </div>
    </section>
  );
}
