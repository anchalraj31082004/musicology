import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => 
{
    return (
      <div className='bg-[--primary-black] h-screen w-[calc(100%-1px)] flex flex-col items-center pt-[80px] text-white gap-12 text-center'>
        <div className='font-medium text-5xl '>
          <h2>Pricing</h2>
        </div>
        <div className='text-3xl font-extralight'>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet <br />  praesentium consequuntur deserunt cum  dicta cupiditate .</h4>
        </div>
        <div className='flex justify-evenly gap-20'>
          <PricingCard text="BASIC" />
          <PricingCard text="PROFESSIONAL" />
          <PricingCard text="ULTIMATE" />
        </div>
      </div>
    )
  }

export default Pricing
