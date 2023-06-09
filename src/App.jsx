import React from 'react'
import Header from './components/Header'
import DanceTour from './components/DanceTour'
import Pricing from './components/Pricing'
import BestDancer from './components/BestDancer'

const App = () => {
  return (
    <>
      <Header/>
      <DanceTour/>
      <Pricing/>
      <BestDancer img={`flex-row.png`} fDirection="flex-row" text="AMAZING DANCE" />
      <BestDancer img={`flex-reverse.png`} fDirection="flex-row-reverse" text="BEST DANCER" />
    </>
  )
}

export default App
