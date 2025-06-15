import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import PlanesTuristicos from './pages/PlanesTuristicos';
import Alojamiento from './pages/Alojamiento';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
// ...otros imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/planes" element={<PlanesTuristicos />} />
        <Route path="/alojamientos" element={<Alojamiento />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* ...otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;



