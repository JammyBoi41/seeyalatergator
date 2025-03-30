import { useState } from 'react'
import Navbar from './parts/Navbar'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BrowsePage from './pages/BrowsePage'
import axios from 'axios'
import { UserContextProvider } from '../context/userContext'
import SellPage from './pages/SellPage'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/browse' element={<BrowsePage/>}/>
        <Route path='/sell' element={<SellPage/>}/>
      </Routes>
      </UserContextProvider>
    </>

  )
}

export default App
