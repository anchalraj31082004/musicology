import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className='bg-[url(/assets/hero.png)] h-screen bg-no-repeat bg-center bg-cover'>
      <Navbar/>
      <Hero />
    </div>
  )
}

export default Header
