import { useState } from 'react'
import './App.css'
// import './output.css'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full font-poppins'>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/' element={<h1>PawsPoint</h1>}></Route> */}
      </Routes>

    </div>
  )
}

export default App
