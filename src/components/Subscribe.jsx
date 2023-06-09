import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex flex-col gap-6 bg-[--secondary-orange] text-white py-20 text-center   '>
        <div className='text-5xl'>
            <h2>SUBSCRIBE</h2>
        </div>
        <div className=' text-xl'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate <br /> reprehenderit nobis hic eligendi voluptas</p>
        </div>
        <div className='flex justify-normal mx-auto mt-6'> 
            <input type="email" name='email' placeholder='Your Email' className='py-2 px-10' />
            <div className='py-2 bg-[--primary-black] px-6'>Subscribe</div>
        </div>
    </div>
  )
}

export default Subscribe
