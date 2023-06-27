export default function Card(card) {
  return (
    <div className="card-container">
      <h3>{card.term}</h3>
      <h3>description: {card.description}</h3>
    </div>
  )
}