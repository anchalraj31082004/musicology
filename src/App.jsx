import React from 'react'
import Header from './components/Header'
import DanceTour from './components/DanceTour'
import Pricing from './components/Pricing'
import BestDancer from './components/BestDancer'
import Calculation from './components/Calculation'
import Dancer from './components/Dancer'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <DanceTour/>
      <Pricing/>
      <BestDancer img={`flex-row.png`} fDirection="flex-row" text="AMAZING DANCE" />
      <BestDancer img={`flex-reverse.png`} fDirection="flex-row-reverse" text="BEST DANCER" />
      <Calculation/>
      <Dancer/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
