import "../../styles/Nosotros/QuienesSomos.scss";
import img1 from "../../assets/Nosotros/Nosotros.jpeg";
import img2 from "../../assets/desiertoTatacoa.jpg";
import img3 from "../../assets/mirador-gigante.jpeg";
import img4 from "../../assets/SantaMarta.jpeg";

export default function QuienesSomos() {
  const imagenes = [img1, img2, img3, img4];

  return (
    <section className="quienes-somos">
      <div className="texto">
        <h2>¿Quiénes somos?</h2>
        <p>
          En Colonial Travel somos apasionados por mostrar lo mejor de Colombia. Durante más de 4 años hemos diseñado experiencias que mezclan aventura, cultura, descanso y gastronomía.
        </p>
        <p>
          Nos enfocamos en crear planes a medida, con atención personalizada, alianzas locales y un compromiso por el turismo sostenible. Cada viaje es una historia, y tú eres el protagonista.
        </p>
      </div>
      <div className="galeria">
        {imagenes.map((img, i) => (
          <img key={i} src={img} alt={`galeria-${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
