import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsBar from './Components/StatsBar'
import FeaturesGrid from './Components/FeaturesGrid'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'

function App() {
  return (
    <main className="w-full overflow-x-hidden pt-20">
      <div className="mx-auto max-w-[900px]">
        <Navbar />
        <Hero />
        <StatsBar />
        <FeaturesGrid />
      </div>
      <Reviews />
      <Footer />
    </main>
  )
}





export default App