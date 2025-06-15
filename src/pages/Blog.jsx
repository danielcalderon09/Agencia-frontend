import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.scss';
import PageWrapper from "../components/PageWrapper";

import blog1 from '../assets/Blog/desiertoTatacoa.jpg';
import blog2 from '../assets/Blog/manoGigante.jpg';
import blog3 from '../assets/Blog/Nagata-Huila.jpg';
import blog4 from '../assets/Blog/Parque-SanAgustin.jpg';

const posts = [
  {
    titulo: 'Explorando el Desierto de la Tatacoa',
    resumen: 'Una aventura astronómica entre rocas rojizas y cielos despejados.',
    imagen: blog1,
  },
  {
    titulo: 'Guía para viajar por el Huila como un local',
    resumen: 'Descubre los rincones menos conocidos y más auténticos del Huila.',
    imagen: blog2,
  },
  {
    titulo: '5 tips para empacar si vas de tour por Colombia',
    resumen: 'Lleva lo necesario y disfruta del viaje con estos consejos prácticos.',
    imagen: blog3,
  },
  {
    titulo: 'Viajar en familia: qué tener en cuenta',
    resumen: 'Haz que el viaje con niños o mayores sea cómodo, seguro y divertido.',
    imagen: blog4,
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <PageWrapper>
      <section className="blog">
        <h2>Blog de Viajes</h2>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              titulo={post.titulo}
              resumen={post.resumen}
              imagen={post.imagen}
            />
          ))}
        </div>
      </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
