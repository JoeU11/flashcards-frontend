import { useState } from 'react'

export default function Card(props) {
  return (
    <div className="card-container" >
      <h2>{props.card.term}</h2>
      {props.reveal && <h3 className="card-description">description: {props.card.description}</h3>}
    </div>
  )
}