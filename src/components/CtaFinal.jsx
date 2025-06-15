import '../styles/CtaFinal.scss';
import { useNavigate } from 'react-router-dom';

export default function CtaFinal() {
  const navigate = useNavigate();
  return (
    <section className="cta-final">
      <h2>¿Listo para tu próxima aventura?</h2>
      <p>Contáctanos y recibe asesoría personalizada para tu viaje.</p>
      <button onClick={() => navigate('/contacto')}>Contáctanos</button>
    </section>
  );
}
