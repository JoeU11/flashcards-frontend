import { useEffect, useState } from 'react'
import Card from "./card.js"

export default function Main(props) {
  // console.log("hello from maim")
  const [card, setCard] = useState(null)
  const [reveal, setReveal] = useState(false)
  const [cardIndex, setCardIndex] = useState(0)
  const [length, setLength] = useState(0)

  function shuffleCards(cards) {
    // console.log("shuffling")
    let currentIndex = cards.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
    setReveal(false)
    setCardIndex(0)
    props.setCards(cards)
    setCard(cards[0])
    setLength(cards.length)
  }

  function startGame(cards) {
    props.setPlay(true)
    shuffleCards(cards)
  }

  const nextCard = (cards) => {
    setCardIndex(cardIndex + 1)
    setReveal(false)
    setCard(cards[cardIndex + 1])
  }

  return (
    <div id="main">
      {props.play || <button onClick={() => startGame(props.cards)}>Start</button>}
      {props.play && <div>
        <div onClick={() => setReveal(true)}>
          <Card {...{ card, reveal }} />
        </div>
        <button onClick={() => shuffleCards(props.cards)}>Shuffle</button>
        {(cardIndex < length - 1) && <button onClick={() => nextCard(props.cards)}>Next</button>}
      </div>}
    </div>
  )
}