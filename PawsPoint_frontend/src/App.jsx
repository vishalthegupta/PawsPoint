import { useState } from 'react';
import './App.css';
// import cursor_paws from './assets/paws_cursor.png'; // Import the cursor image
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/pages/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="cursor-custom w-screen h-screen font-poppins">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>

    </div>
  );
}

export default App;

