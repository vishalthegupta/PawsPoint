import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../shared/Navbar'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    
    <div className='text-red-500 text-2xl cursor-custom w-full h-full bg-secondary'>
    <Navbar/>
      <h1 className='font-poppins'>Home</h1>
    </div>
    {/* <button onClick={()=>navigate('/')}>Go back</button> */}

    </>
  )
}

export default Home