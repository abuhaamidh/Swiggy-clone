import { useState } from 'react'
import './App.css'
import "../src/Pages/Home";
import Path from './router/Path';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Path/>
  )
}

export default App
