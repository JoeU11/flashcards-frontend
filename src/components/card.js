export default function Card(card) {
  return (
    <div className="card-container">
      <h2>{card.term}</h2>
      <h3 className="card-description">description: {card.description}</h3>
    </div>
  )
}