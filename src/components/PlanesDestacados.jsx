import '../styles/PlanesDestacados.scss';
import PlanCard from './PlanCard';

import plan1 from '../assets/Planes/plan1.jpg';
import plan2 from '../assets/Planes/plan2.jpg';
import plan3 from '../assets/Planes/plan3.jpg';

const planes = [
  { titulo: 'Plan Básico', imagen: plan1 },
  { titulo: 'Plan Full', imagen: plan2 },
  { titulo: 'Plan Premium', imagen: plan3 },
];

export default function PlanesDestacados() {
  return (
    <section className="planes-destacados">
      <h2>Planes turísticos</h2>
      <div className="grid-planes">
        {planes.map((plan, index) => (
          <PlanCard key={index} titulo={plan.titulo} imagen={plan.imagen} />
        ))}
      </div>
    </section>
  );
}
