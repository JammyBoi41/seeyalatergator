import { useState } from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </>

  )
}

export default App
