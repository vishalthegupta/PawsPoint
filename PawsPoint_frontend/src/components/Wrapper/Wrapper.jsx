import React from 'react'
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'


const Wrapper = ({children}) => {
  return (
    <div className='overflow-x-hidden h-screen w-screen'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Wrapper