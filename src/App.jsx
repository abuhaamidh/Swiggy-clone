import { useState } from 'react'
import './App.css'
import "../src/Pages/Home";
import Router from './Router/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router/>
  )
}

export default App
