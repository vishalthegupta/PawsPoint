import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../shared/Navbar'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    
    <div className='text-red-500 text-2xl cursor-custom w-full h-full bg-secondary'>
    <Navbar/>
      <div className='w-full h-auto'>
        <img src='https://supertails.com/cdn/shop/files/Frame_1405176767-min_6855ee30-6ea4-48ef-96f0-13d809ed6f4d_1600x.png?v=1731579835'></img>
      </div>
    </div>
    {/* <button onClick={()=>navigate('/')}>Go back</button> */}

    </>
  )
}

export default Home