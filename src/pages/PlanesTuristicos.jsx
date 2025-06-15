import PlanCard from '../components/PlanCard';
import '../styles/PlanesTuristicos.scss';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from '../components/PageWrapper';

// Imágenes locales (supón que están en /assets)
import plan1 from '../assets/Planes/Cali.jpg';
import plan2 from '../assets/Planes/Cartagena.jpg';
import plan3 from '../assets/Planes/Medellin.jpg';
import plan4 from '../assets/Planes/SanAndres.jpg';

const planes = [
  { titulo: 'Plan Guajira', imagen: plan1 },
  { titulo: 'Plan Neiva', imagen: plan2 },
  { titulo: 'Plan San Andrés', imagen: plan3 },
  { titulo: 'Plan Amazonas', imagen: plan4 },
];

export default function PlanesTuristicos() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="planes">
          <h2>Planes Turísticos</h2>
           <div className="planes-grid">
            {planes.map((plan, index) => (
              <PlanCard key={index} titulo={plan.titulo} imagen={plan.imagen} />
            ))}
          </div> 
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
