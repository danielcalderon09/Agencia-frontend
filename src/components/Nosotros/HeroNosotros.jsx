import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles//Nosotros/HeroNosotros.scss';

import img1 from '../../assets/Blog/desiertoTatacoa.jpg';
import img2 from'../../assets/Blog/desiertoTatacoa.jpg';
import img3 from '../../assets/Blog/desiertoTatacoa.jpg';

const slides = [img1, img2, img3];

export default function HeroNosotros() {
  const navigate = useNavigate();

  return (
    <section className="hero-nosotros">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="slide" style={{ backgroundImage: `url(${img})` }}>
              <div className="overlay" />
              <div className="contenido">
                <h1>Más que viajes,<br />creamos experiencias</h1>
                <p>Conectamos a los viajeros con lo más auténtico de Colombia<br />a través de aventuras únicas e inolvidables.</p>
                <button onClick={() => navigate('/contacto')}>Conócenos</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
