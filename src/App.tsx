import { useState } from 'react'
import './styles.css'

export const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>This is working!</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
    </div>
  )
}
