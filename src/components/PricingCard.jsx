import React from 'react'
import Button from './Button'

const PricingCard = (props) =>{
    return (
      <div className='bg-[--secondary-orange] max-w-xs  rounded-lg flex flex-col items-center p-8 gap-7 border-2 '>
        <div>
          <img src="/assets/cardFlower.png" alt="" />
        </div>
        <div className='flex flex-col gap-4 p-4 items-center'>
          <h4 className='text-2xl font-normal'>{props.text}</h4>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button bg={`--primary-black`} text="$ 150.00" />
        </div>
      </div>
    )
  }

export default PricingCard
