import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  const [cookies] = useCookies(['token']);
  const cookie = cookies?.token;

  return (
    <div className="cursor-custom w-screen h-screen font-poppins">
      <Routes>
        {cookie ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Signup />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
