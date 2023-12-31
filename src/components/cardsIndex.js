import Modal from "./modal.js"
import EditCard from "./editCard.js"
import Card from "./card.js"
import { useState } from "react"

export default function CardsIndex(props) {
  const [showEdit, setShowEdit] = useState(false)
  const [currentCard, setCurrentCard] = useState(props.cards[0])
  const [cardIndex, setCardIndex] = useState(0)

  const handleEdit = (card) => {
    setCurrentCard(card)
    setCardIndex(props.cards.findIndex(obj => obj.id === card.id))
    setShowEdit(true)
  }

  const cardElements = props.cards.map((card) => {
    return (
      <Card key={card.id} {...{ card, reveal: true, handleEdit }} />
    )
  })

  const handleClose = () => {
    setShowEdit(false)
  }



  return (
    <div className="card-index">
      <Modal show={showEdit} onClose={handleClose}>
        <EditCard {...{ cardIndex, handleClose }} card={currentCard} cards={props.cards} setCards={props.setCards} setCard={setCurrentCard} />
      </Modal>
      {cardElements}
      <button onClick={() => console.log(props.cards)}>print cards</button>
    </div>
  )
}