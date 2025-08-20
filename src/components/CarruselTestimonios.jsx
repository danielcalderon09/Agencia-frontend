import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/CarruselTestimonios.scss';

export default function CarruselTestimonios() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonios')
      .then(res => res.json())
      .then(data => setTestimonios(data))
      .catch(err => console.error('Error cargando testimonios:', err));
  }, []);

  return (
    <section className="carrusel-testimonios">
      <h2>Lo que dicen nuestros viajeros</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonios.map((t) => (
          <SwiperSlide key={t._id}>
            <div className="testimonio-card">
              <img
                src={`http://localhost:5000${t.imagen}`}
                alt={t.nombre}
                className="avatar"
              />
              <p className="mensaje">“{t.opinion}”</p>
              <h3>{t.nombre}</h3>
              {/* Si quieres agregar una ciudad u otro dato, puedes extender aquí */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
