import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js"
import Card from "./components/card.js"
import axios from "axios";
import { useState, useEffect } from 'react'

function App() {
  const [cards, setCards] = useState([])

  const getCards = () => {
    console.log("getting cards")
    axios.get("http://localhost:3000/cards").then(response => {
      console.log(response.data)
      setCards(response.data)
    })
  }

  const cardElements = cards.map((card) => {
    return (
      <Card key={card.id} {...card} />
    )
  })

  useEffect(getCards, [])

  return (
    <div className="App">
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
