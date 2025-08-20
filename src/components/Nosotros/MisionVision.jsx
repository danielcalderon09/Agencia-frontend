import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Nosotros/MisionVision.scss';

import misionImg from '../../assets/Blog/desiertoTatacoa.jpg';
import visionImg from '../../assets/Blog/desiertoTatacoa.jpg';

const valores = [
  {
    titulo: 'MISIÓN',
    texto: 'Crear experiencias únicas que conecten a los viajeros con el alma de cada destino, generando impacto positivo y recuerdos imborrables.',
    imagen: misionImg,
  },
  {
    titulo: 'VISIÓN',
    texto: 'Ser líderes en el turismo colombiano y latinoamericano, resaltando la autenticidad, sostenibilidad y cultura en cada experiencia.',
    imagen: visionImg,
  },
];

export default function MisionVision() {
  return (
    <section className="mision-vision">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {valores.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <div className="imagen" style={{ backgroundImage: `url(${item.imagen})` }} />
              <div className="contenido">
                <h2>{item.titulo}</h2>
                <p>{item.texto}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
