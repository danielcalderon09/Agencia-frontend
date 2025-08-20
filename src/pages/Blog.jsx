import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.scss';
import PageWrapper from "../components/PageWrapper";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error cargando blog:', err))
      .finally(() => setCargando(false));
  }, []);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="blog">
          <h2>Blog de Viajes</h2>

          {cargando ? (
            <p className="cargando">Cargando artículos...</p>
          ) : posts.length === 0 ? (
            <p className="sin-articulos">No hay artículos disponibles por ahora.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard
                  key={post._id}
                  _id={post._id}
                  titulo={post.titulo}
                  resumen={post.resumen}
                  imagen={`http://localhost:5000${post.imagen}`}
                />
              ))}
            </div>
          )}
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
