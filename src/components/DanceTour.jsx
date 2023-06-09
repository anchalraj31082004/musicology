import React from 'react'
import TourCard from './TourCard'

const DanceTour = () => {
  return (
    <div className='bg-[--secondary-orange] h-screen w-[calc(100%-1px)] flex flex-col items-center pt-[80px] text-white gap-12 text-center'>
      <div className='font-medium text-5xl '>
        <h2>DANCE TOUR</h2>
      </div>
      <div className='text-3xl font-extralight'>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet <br />  praesentium consequuntur deserunt cum  dicta cupiditate .</h4>
      </div>
      <div className='flex justify-evenly gap-20'>
        <TourCard img={`card1.png`} text="AMERICA" />
        <TourCard img={`card2.png`} text="ASIA" />
        <TourCard img={`card3.png`} text="AUSTRALIA" />
      </div>
    </div>
  )
}

export default DanceTour
