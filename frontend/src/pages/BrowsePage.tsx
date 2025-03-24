import React from 'react'
import {UserContext} from '../../context/userContext'
import { useContext } from 'react';

// const {user} = useContext(UserContext)

const BrowsePage = () => {
  const listings = []; //container of all Listing(s)




  return (
    <div style={{backgroundColor: "#f2f4fa"}} className="items-center justify-center w-full h-screen flex flex-row pt-3 pb-3">  {/* browsing page div */}
      <div className='place-items-center grid bg-black w-4/5 h-4/5 grid-cols-3'> {/* container that holds the listings */}
      
      
      </div>
    </div>
  )
}

export default BrowsePage