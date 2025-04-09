import { useState } from 'react'
import './App.css'
import Header from './coponent/Header'
import Menu from './coponent/Menu'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="grid grid-cols-5 bg-blue-500 text-black mx-8 mt-5">
        <Header></Header>
        <Menu></Menu>
        <Dashboard></Dashboard>
        </div>
    </>
  )
}

export default App
