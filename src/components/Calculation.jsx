import React from 'react'
import CalculationCard from './CalculationCard'

const Calculation = () => {
    return (
      <div className='bg-[--primary-black] w-[calc(100%-1px)] flex flex-col items-center py-[80px] text-white gap-12 text-center'>
        <div className='font-medium text-5xl '>
          <h2>OUR STATISTICS</h2>
        </div>
        <div className='text-3xl font-extralight'>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet <br />  praesentium consequuntur deserunt cum  dicta cupiditate .</h4>
        </div>
        <div className='flex justify-evenly gap-20 mt-12'>
            <CalculationCard text="Club" num="1240+" />
            <CalculationCard text="Active Member" num="2000+" />
            <CalculationCard text="Community" num="1.000+" />
        </div>
      </div>
    )
  }

export default Calculation
