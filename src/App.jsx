import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Home from './Component/Home'
import Register from './Component/Register'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="App text-start">
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
