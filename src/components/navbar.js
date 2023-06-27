export default function Navbar() {
  return (
    <nav>
      <h2 id="nav-title">Welcome to the Flashcards App!</h2>
      <div id="nav-link-container">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/cards">All Cards</a>
        <a className="nav-link" href="/cards/new">Add a card</a>
      </div>
    </nav>
  )
}