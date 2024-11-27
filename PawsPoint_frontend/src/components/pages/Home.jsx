import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../shared/Navbar'
import Wrapper from '../Wrapper/wrapper'
import HeaderCarousel from '../../shared/HeaderCarousel'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <Wrapper>
    <div className='text-2xl cursor-custom w-full h-auto bg-secondary'>
    
      {/* <div className='w-full h-auto'>
        <img src='https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835'></img>
      </div> */}
      {/* corousal */}
      <HeaderCarousel/>
      {/* corousal end */}
    </div>
    {/* <button onClick={()=>navigate('/')}>Go back</button> */}
    </Wrapper>
    </>
  )
}

export default Home