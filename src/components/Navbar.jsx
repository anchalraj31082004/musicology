import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[--primary-black] text-white items-center px-16 py-2'>
      <div>
        <img src="/assets/logo.png" alt="" />
      </div>
      <div>
        <ul className='flex justify-around gap-10 font-semibold text-lg'>
            <li>Home</li>
            <li>Product</li>
            <li>Promo</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='text-3xl'>
        <FaSearch/>
      </div>
    </div>
  )
}

export default Navbar
