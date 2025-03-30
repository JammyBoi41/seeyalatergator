import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react';
import {UserContext} from '../../context/userContext'




const Navbar = () => {
  const {user} = useContext(UserContext);

  return (
    <div className='text-lg bg-blue-800 w-screen h-1/12 fixed top-0 left-0 border-gray-200 border-b-1 flex flex-row justify-between '> {/* div of navbar */}

        <Link to='/' className="flex flex-row justify-center items-center cursor-pointer"> 
          <h3 className="font-bold text-white hover:text-orange-500 transition duration-300">S.Y.L.G</h3>
        </Link>

        <Link to='/browse' className="flex flex-row justify-center items-center cursor-pointer"> {/* lofo left */}
          <div className="flex items-center justify-center"> {/* buttons in the middle */}
            <button className="h-3/4 w-full mr-2 text-white font-bold whitespace-nowrap cursor-pointer hover:text-orange-500 transition duration-300"> Browse </button>
          </div>
        </Link>

        <Link to='/sell' className="flex flex-row justify-center items-center cursor-pointer"> {/* lofo left */}
          <div className="flex items-center justify-center"> {/* buttons in the middle */}
            <button className="h-3/4 w-full mr-2 text-white font-bold whitespace-nowrap cursor-pointer hover:text-orange-500 transition duration-300"> Sell </button>
          </div>
        </Link>

        {user === null ?
        <div className="flex items-center justify-center"> {/* div containing login/signup buttons */}
          <Link to='/signup' className="flex items-center justify-center bg-white min-w-1/2 h-3/4 w-full mr-2 text-white font-bold whitespace-nowrap pl-1 pr-1 rounded-lg border-1 border-gray-200 cursor-pointer hover:bg-gray-300 transition duration-300"> Sign Up </Link>
          <Link to="/login" className="flex items-center justify-center bg-orange-500 min-w-1/2 h-3/4 w-full mr-3 text-white font-bold whitespace-nowrap pl-1 pr-1 rounded-lg border-gray-200 cursor-pointer hover:bg-orange-700 transition duration-300"> Log In </Link>
        </div>

        :
        
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-white">Welcome, {user.name}</h1>
        </div>
        }
        
        
    </div>
  )
}

export default Navbar