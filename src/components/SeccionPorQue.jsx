import { motion } from 'framer-motion';
import '../styles/SeccionPorQue.scss';

import imgDesiertoRojo from '../assets/Hero/Desiertotatacoa.webm';
import imgDesiertoGris from '../assets/Hero/ImgDesiertoGris-1.webm';
import imgObservatorio from '../assets/Hero/ImgDesiertoGris.webm';

const razones = [
  {
    titulo: 'Desierto Rojo: un viaje a otro mundo',
    descripcion:
      'Recorre un paisaje surrealista de cañones rojizos y formaciones que parecen esculpidas por la naturaleza misma. Vive el contraste del calor del día y el silencio místico del atardecer.',
    imagen: imgDesiertoRojo,
  },
  {
    titulo: 'Desierto Gris: el secreto mejor guardado',
    descripcion:
      'Adéntrate en un entorno lunar de tonos grises y texturas únicas. Menos explorado, más salvaje. Ideal para los espíritus aventureros que buscan rincones fuera de lo común.',
    imagen: imgDesiertoGris,
  },
  {
    titulo: 'Cielo estrellado y observación astronómica',
    descripcion:
      'Cuando cae la noche, comienza el verdadero espectáculo. Disfruta de un cielo limpio y estrellado, ideal para ver la vía láctea, constelaciones y hasta lluvias de meteoros. Un recuerdo que quedará grabado para siempre.',
    imagen: imgObservatorio,
  },
];


export default function SeccionPorQue() {
  return (
    <section className="seccion-porque">
      <div className="contenedor">
        <h2 className="titulo-principal">¿Por qué elegir la Tatacoa?</h2>
        <p className="descripcion-principal">
          Más que un destino, es una vivencia que transforma. Descubre lo que hace única a la Tatacoa.
        </p>

        <div className="razones-lista">
          {razones.map((razon, index) => (
            <motion.div
              key={index}
              className={`razon ${index % 2 !== 0 ? 'invertida' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="razon-imagen">
                <video
                  src={razon.imagen}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
              <div className="razon-texto">
                <h3>{razon.titulo}</h3>
                <span className="linea"></span>
                <p>{razon.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
