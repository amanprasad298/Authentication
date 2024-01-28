import React from 'react'
import Login from './Component/Login/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Component/Sign up/Signup';
import Forgot from './Component/Forgot/Forgot';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot-password' element={<Forgot/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App