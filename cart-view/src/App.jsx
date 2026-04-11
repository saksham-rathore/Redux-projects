import React from 'react'
import { Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Products from './Components/Products'

function App() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/Cart");
  }
  
  const username1 = "Product 1"
  const username2 = "Product 2"
  const username3 = "Product 3"
  const username4 = "Product 4"

  return (
    <div className='grid grid-cols-4 gap-4 flex justify-center items-center'>
      <Products name={username1}/>
      <Products name={username2}/>
      <Products name={username3}/>
      <Products name={username4}/>
      <button className='border rounded-xl p-1 w-30 cursor-pointer' onClick={handleclick}>Cart</button>
    </div>
  )
}

export default App