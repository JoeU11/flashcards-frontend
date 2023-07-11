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
        <button onClick={console.log(props.cards, props.cardIndex, props.card)}>print card</button>
      </form>
    </div >
  )
}