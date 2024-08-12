import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <div>Home</div>
<button onClick={()=>{navigate("/")}} >Back to main menu</button>
    </>
  )
}

export default Home