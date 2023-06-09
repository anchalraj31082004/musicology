import React from 'react'

const TourCard = (props) => {
  return (
    <div className='bg-[--primary-black] max-w-xs  rounded-lg'>
      <div>
        <img src={`/assets/${props.img}`}alt="" />
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <h4 className='text-2xl font-normal'>{props.text}</h4>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default TourCard
