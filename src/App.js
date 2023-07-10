import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js"
import Card from "./components/card.js"
import CardNew from "./components/cardNew.js"
import Main from "./components/main.js"
import axios from "axios";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cards, setCards] = useState([])
  const [play, setPlay] = useState(false)

  const getCards = () => {
    console.log("getting cards")
    axios.get("http://localhost:3000/cards").then(response => {
      console.log(response.data)
      setCards(response.data)
    })
  }

  const cardElements = cards.map((card) => {
    return (
      <Card key={card.id} {...{ card, reveal: true }} />
    )
  })

  useEffect(getCards, [])

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/cards/new" element={<CardNew />} />
          <Route path="/" element={<Main {...{ cards, play, setPlay, setCards }} />} />
          <Route path="/cards" element={cardElements} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
