import { upload } from '@testing-library/user-event/dist/upload'
import axios from 'axios'

export default function CardEdit(props) {
  function handleSubmit(event) {
    console.log("patching card")
    event.preventDefault()
    console.log(event)
    let params = new FormData(event.target)
    axios.patch(`http://localhost:3000/cards/${props.card.id}`, params).then(response => {
      console.log(response)
      props.setCard(response.data)
      event.target.reset()
      props.handleClose()
      var updatedCards = props.cards
      updatedCards[props.cardIndex] = response.data
      props.setCards(updatedCards)
    })
  }

  function deleteCard() {
    console.log(props.card.id)
    axios.delete(`http://localhost:3000/cards/${props.card.id}`).then(response => {
      console.log(response)
      props.handleClose()
      var updatedCards = props.cards
      updatedCards.splice(props.cardIndex, 1)
      props.setCards(updatedCards)
    })
  }

  return (
    <div className="card-new">
      <form onSubmit={handleSubmit}>
        <div>
          Term: <input name="term" defaultValue={props.card.term} />
        </div>
        <div>
          Description: <input name="description" defaultValue={props.card.description} />
        </div>
        <button type="submit" style={{ color: "white", backgroundColor: "green" }}>Edit card</button>
        <button type="button" onClick={deleteCard} style={{ color: "white", backgroundColor: "red" }}>Delete card</button>
      </form>
    </div >
  )
}