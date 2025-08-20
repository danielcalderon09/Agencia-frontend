import { useEffect, useState } from "react";
import ModalCrearBlog from "../../components/Blog/ModalCrearBlog";
import ModalEditarBlog from "../../components/Blog/ModalEditarBlog";
import "../../styles/Blog/AdminBlog.scss";
import { toast } from "react-toastify";

const AdminBlog = () => {
  const [posts, setPosts] = useState([]);
  const [modalCrear, setModalCrear] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [postActual, setPostActual] = useState(null);

  const obtenerPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blog");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      toast.error("Error al cargar los artículos");
    }
  };

  const eliminarPost = async (id) => {
    if (confirm("¿Eliminar este artículo?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/blog/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error();
        toast.success("Artículo eliminado");
        obtenerPosts();
      } catch {
        toast.error("Error al eliminar el artículo");
      }
    }
  };

  const handleSuccessCrear = () => {
    obtenerPosts();
    setModalCrear(false);
    toast.success("Artículo creado con éxito");
  };

  const handleSuccessEditar = () => {
    obtenerPosts();
    setModalEditar(false);
    setPostActual(null);
    toast.success("Artículo actualizado con éxito");
  };

  useEffect(() => {
    obtenerPosts();
  }, []);

  return (
    <div className="admin-blog">
      <div className="admin-header">
        <h2>Gestión de Blog</h2>
        <button className="crear-btn" onClick={() => setModalCrear(true)}>
          + Crear Artículo
        </button>
      </div>

      {posts.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          No hay artículos aún.
        </p>
      ) : (
        <div className="lista-posts">
          {posts.map((post) => (
            <div key={post._id} className="post-card">
              {post.imagen && (
                <img
                  src={`http://localhost:5000${post.imagen}`}
                  alt={post.titulo}
                  className="imagen-post"
                />
              )}
              <div className="contenido">
                <h3>{post.titulo}</h3>
                <p>{post.resumen}</p>
                <div className="acciones">
                  <button
                    className="editar"
                    onClick={() => {
                      setPostActual(post);
                      setModalEditar(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="eliminar"
                    onClick={() => eliminarPost(post._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalCrear && (
        <ModalCrearBlog
          onClose={() => setModalCrear(false)}
          onSuccess={handleSuccessCrear}
        />
      )}

      {modalEditar && postActual && (
        <ModalEditarBlog
          post={postActual}
          onClose={() => {
            setModalEditar(false);
            setPostActual(null);
          }}
          onSuccess={handleSuccessEditar}
        />
      )}
    </div>
  );
};

export default AdminBlog;
