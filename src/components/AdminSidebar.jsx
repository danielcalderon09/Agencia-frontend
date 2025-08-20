// src/components/AdminSidebar.jsx
import { Link } from "react-router-dom";
import "../styles/Admin.scss";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2>Admin</h2>
      <nav>
        <Link to="/admin/planes">📌 Planes turísticos</Link>
        <Link to="/admin/testimonios">💬 Testimonios</Link>
        <Link to="/admin/blog">📝 Blog</Link>
        <Link to="/admin/contacto">📥 Contacto</Link>
        <Link to="/admin/usuarios">👥 Usuarios</Link>
      </nav>
    </aside>
  );
}
