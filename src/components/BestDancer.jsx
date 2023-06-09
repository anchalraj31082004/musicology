import React from 'react'
import Button from './Button'

const BestDancer = (props) => {
  return (
    <div className={`${props.fDirection} flex justify-between bg-[--secondary-orange] gap-11 `}>
      <div>
        <img src={`/assets/${props.img}`} className='h-screen w-[980px]' />
      </div>
      <div className='flex flex-col gap-10 text-white max-w-lg items-start mt-60 mx-20'>
        <h2 className='font-medium text-6xl' >{props.text}</h2>
        <p className=' font-light text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis ex sint expedita saepe quasi tempore autem voluptate praesentium, ipsa dolores esse cumque nihil sapiente!</p>
        <Button text="Read More" bg={`--primary-black`} />
      </div>
    </div>
  )
}

export default BestDancer
