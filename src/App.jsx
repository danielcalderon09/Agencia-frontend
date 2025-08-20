import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Páginas públicas
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import PlanesTuristicos from './pages/PlanesTuristicos';
import Alojamiento from './pages/Alojamiento';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import DetallePlan from './pages/Planes/DetallePlan';
import Afiliados from './pages/Afiliados';
import Login from './pages/Login';
import BlogDetalle from './pages/BlogDetalle';
import PasarelaAfiliacion from './pages/PasarelaAfiliacion';
import PagoExitoso from "./pages/PagoExitoso";
import ReservaPlan from "./pages/ReservaPlan"; // ⬅️ renombrado a como es el componente real

// Panel de administración
import Admin from './pages/Admin';
import AdminDashboard from './components/AdminDashboard';
import AdminPlanes from './pages/admin/AdminPlanes';
import AdminTestimonios from './pages/admin/AdminTestimonios';
import AdminBlog from './pages/admin/AdminBlog';
import AdminContacto from './pages/admin/AdminContacto';
import AdminUsuarios from './pages/admin/AdminUsuarios';

// Sección de afiliados
import UsuarioInicio from "./pages/usuario/UsuarioInicio";
import UsuarioAlojamiento from "./pages/usuario/UsuarioAlojamiento";
import UsuarioPlanes from "./pages/usuario/UsuarioPlanesTuristicos";
import UsuarioContacto from "./pages/usuario/UsuarioContacto";
import UsuarioBlog from "./pages/usuario/UsuarioBlog";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/planes" element={<PlanesTuristicos />} />
        <Route path="/planes/:id" element={<DetallePlan />} />
        <Route path="/alojamientos" element={<Alojamiento />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/afiliados" element={<Afiliados />} />
        <Route path="/afiliacion/pago" element={<PasarelaAfiliacion />} />
        <Route path="/pago/exitoso" element={<PagoExitoso />} />
        <Route path="/reserva/:id" element={<ReservaPlan />} /> {/* ⬅️ RUTA corregida */}
        <Route path="/login" element={<Login />} />

        {/* Panel de administración */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="planes" element={<AdminPlanes />} />
          <Route path="testimonios" element={<AdminTestimonios />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="contacto" element={<AdminContacto />} />
          <Route path="usuarios" element={<AdminUsuarios />} />
        </Route>

        {/* Rutas para afiliados */}
        <Route path="/usuario/inicio" element={<UsuarioInicio />} />
        <Route path="/usuario/alojamiento" element={<UsuarioAlojamiento />} />
        <Route path="/usuario/planesturisticos" element={<UsuarioPlanes />} />
        <Route path="/usuario/planesturisticos/:id" element={<DetallePlan />} />
        <Route path="/usuario/blog" element={<UsuarioBlog />} />
        <Route path="/usuario/blog/:id" element={<BlogDetalle />} />
        <Route path="/usuario/contacto" element={<UsuarioContacto />} />
      </Routes>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default App;
