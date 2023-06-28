import axios from 'axios'

export default function CardNew() {
  function handleSubmit(event) {
    console.log("adding card")
    event.preventDefault()
    console.log(event)
    let params = new FormData(event.target)
    axios.post("http://localhost:3000/cards", params).then(response => {
      console.log(response)
      event.target.reset()
      window.location.href = "/"
    })
  }
  return (
    <div className="card-new">
      <form onSubmit={handleSubmit}>
        <div>
          Term: <input name="term" />
        </div>
        <div>
          Description: <input name="description" />
        </div>
        <button type="submit" style={{ color: "white", backgroundColor: "green" }}>add card</button>
      </form>
    </div >
  )
}