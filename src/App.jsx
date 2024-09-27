import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetDistribution from './Component/Budget distrubution'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BudgetDistribution/>
    </>
  )
}

export default App
