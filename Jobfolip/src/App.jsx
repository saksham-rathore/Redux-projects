import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import FeaturesGrid from './Components/FeaturesGrid'

function App() {
  return (
    <div className="mx-auto max-w-[900px]">
      <Navbar />
      <Hero />
      <FeaturesGrid />
    </div>
  )
}


export default App