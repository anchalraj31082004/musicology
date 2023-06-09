import React from 'react'

const CalculationCard = (props) =>{
    return (
      <div className=' max-w-md flex flex-col items-center p-8 gap-7'>
        <h4 className='text-3xl font-normal'>{props.num}</h4>
          <p className=' text-xl'>{props.text}</p>
      </div>
    )
  }

export default CalculationCard
