import "../styles/GaleriaFotos.scss";
import foto1 from "../assets/Nosotros/Nosotros.jpeg";
import foto2 from "../assets/desiertoTatacoa.jpg";
import foto3 from "../assets/mirador-gigante.jpeg";
import foto4 from "../assets/SantaMarta.jpeg";

export default function GaleriaFotos() {
  return (
    <div className="galeria">
      <img src={foto1} alt="viaje 1" />
      <img src={foto2} alt="viaje 2" />
      <img src={foto3} alt="viaje 3" />
      <img src={foto4} alt="viaje 4" />
    </div>
  );
}
