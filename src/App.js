import React from 'react'
import Login from './Component/Login/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Component/Sign up/Signup';
import Forgot from './Component/Forgot/Forgot';
import Otp from './Component/Otp/Otp';
import ResetPass from './ResetPass/ResetPass';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot-password' element={<Forgot/>}/>
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/reset-pass' element={<ResetPass/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App