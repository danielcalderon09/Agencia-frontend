import { useEffect, useState } from 'react';
import Navbar from "../../components/Usuarios/NavbarUsuario";
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import '../../styles/Blog.scss';
import PageWrapper from "../../components/PageWrapper";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error cargando blog:', err));
  }, []);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="blog">
          <h2>Blog de Viajes</h2>
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                _id={post._id} // ✅ ID necesario para la navegación
                titulo={post.titulo}
                resumen={post.resumen}
                imagen={`http://localhost:5000${post.imagen}`} // asegúrate de que sea la URL completa
              />
            ))}
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
