import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='text-red-500 text-2xl'>Home</div>
    <button onClick={()=>navigate('/')}>Go back</button>

    </>
  )
}

export default Home