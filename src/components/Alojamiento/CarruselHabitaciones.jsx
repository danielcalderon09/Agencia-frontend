import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaWifi, FaSnowflake, FaTv } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Alojamiento/CarruselHabitaciones.scss';

import hab1 from '../../assets/Alojamiento/habitacion-2camas.JPG';
import hab2 from '../../assets/Alojamiento/habitacion-1cama.jpeg';

const habitaciones = [
  {
    nombre: 'Habitación Deluxe',
    descripcion: 'Inspirada en la elegancia colonial, esta habitación ofrece una cama doble, aire acondicionado, baño privado y detalles en madera que evocan el espíritu tradicional del desierto.',
    imagen: hab1,
    comodidades: ['WiFi', 'A/C', 'TV'],
  },
  {
    nombre: 'Habitación Familiar',
    descripcion: 'Decorada con acentos cálidos y techos altos, es perfecta para compartir. Cuenta con varias camas, climatización, televisión y mobiliario con detalles clásicos.',
    imagen: hab2,
    comodidades: ['WiFi', 'A/C', 'TV'],
  },
];

const icons = {
  'WiFi': <FaWifi />,
  'A/C': <FaSnowflake />,
  'TV': <FaTv />,
};

export default function CarruselHabitaciones() {
  return (
    <section className="habitaciones-colonial">
      <h2 className="titulo">Nuestras Habitaciones</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500 }}
        loop
      >
        {habitaciones.map((hab, index) => (
          <SwiperSlide key={index}>
            <div className="habitacion-slide">
              <div className="img-wrapper">
                <img src={hab.imagen} alt={hab.nombre} />
              </div>
              <div className="info">
                <h3>{hab.nombre}</h3>
                <p className="descripcion">{hab.descripcion}</p>
                <div className="comodidades">
                  {hab.comodidades.map((c, i) => (
                    <span key={i} title={c}>
                      {icons[c]} <small>{c}</small>
                    </span>
                  ))}
                </div>
                <button className="btn-reservar">Reservar ahora</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
