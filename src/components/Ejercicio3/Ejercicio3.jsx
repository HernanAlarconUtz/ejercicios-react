import { useState } from "react"

const Ejercicio3 = () => {
    const [message, setMessage] = useState("")

    const handleClick = () => {
        setMessage("(from changed state)")
    }

  return (
    <section className="container text-center mt-5">
    <h1 className="mb-5">Hello my friend {message} !</h1>
    <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    </section>
  )
}
export default Ejercicio3