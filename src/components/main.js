import { useEffect, useState } from 'react'
import Card from "./card.js"

export default function Main(props) {
  console.log("hello from maim")
  const [card, setCard] = useState(null)
  const [reveal, setReveal] = useState(false)

  function shuffleCards(cards) {
    console.log("shuffling")
    let currentIndex = cards.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
    setReveal(false)
    props.setCards(cards)
    setCard(cards[0])
  }

  function startGame(cards) {
    props.setPlay(true)
    shuffleCards(cards)

  }

  return (
    <div id="main">
      {props.play || <button onClick={() => startGame(props.cards)}>Start</button>}
      <div onClick={() => setReveal(true)}>
        {props.play && <Card {...{ card, reveal }} />}
      </div>
      {props.play && <button onClick={() => shuffleCards(props.cards)}>Shuffle</button>}
    </div>
  )
}