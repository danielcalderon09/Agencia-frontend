// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.scss";

export default function Admin() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAccess = () => {
      const stored = localStorage.getItem("afiliado");
      if (!stored) {
        navigate("/", { replace: true });
        return;
      }

      const afiliado = JSON.parse(stored);
      if (afiliado.rol !== "admin") {
        navigate("/usuario", { replace: true });
      } else {
        setIsReady(true);
      }
    };

    setTimeout(checkAccess, 50);
  }, [navigate]);

  const handleCerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("afiliado");
    navigate("/login");
  };

  if (!isReady) return null;

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-main">
        <div className="admin-topbar">
          <button className="cerrar-sesion-admin" onClick={handleCerrarSesion}>
            Cerrar sesión
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
