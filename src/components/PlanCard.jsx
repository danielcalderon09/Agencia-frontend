import '../styles/PlanCard.scss';

export default function PlanCard({ imagen, titulo }) {
  return (
    <div className="plan-card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
    </div>
  );
}
