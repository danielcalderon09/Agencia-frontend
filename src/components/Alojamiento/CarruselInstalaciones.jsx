// src/components/Alojamientos/CarruselInstalaciones.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/Alojamiento/CarruselInstalaciones.scss';

import img1 from '../../assets/Alojamiento/jardin.jpeg';
import img2 from '../../assets/Alojamiento/recepcion.jpg';
import img3 from '../../assets/Alojamiento/escaleras.JPG';

const imagenes = [img1, img2, img3];

export default function CarruselInstalaciones() {
  return (
    <section className="carrusel-instalaciones">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        {imagenes.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="descripcion-superpuesta">
        <h2>Hotel Colonial Villavieja</h2>
        <p>Explora nuestras instalaciones únicas, donde tradición y confort se encuentran en el corazón del desierto.</p>
      </div>
    </section>
  );
}
