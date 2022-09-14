import { useState } from 'react'
import Sections from '../pieces/index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <Sections></Sections>
}

export default App
