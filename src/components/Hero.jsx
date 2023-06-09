import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='text-white max-w-lg items-left gap-7 flex flex-col pt-80 pl-32'>
      <h1 className='text-7xl'>TITLE HERE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nam esse minus magnam labore, sunt id. Fugiat doloribus odit quis, quas at nam enim odio.</p>
      <div><Button text="Register Now" bg={`--secondary-orange`}/></div>
    </div>
  )
}

export default Hero
