import '../../styles/Planes/ModalTour.scss';

const ModalTour = ({ tour, onClose }) => {
  if (!tour) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-tour" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onClose}>×</button>

        {tour.imagen && (
          <img
            src={`http://localhost:5000${tour.imagen}`}
            alt={tour.titulo}
          />
        )}

        <h2>{tour.titulo}</h2>
        <p>{tour.descripcion}</p>

        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#5a3e2b' }}>
          Precio: <span style={{ color: '#a8652d' }}>${tour.precio}</span>
        </p>
      </div>
    </div>
  );
};

export default ModalTour;
