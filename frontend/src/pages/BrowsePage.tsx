import React from 'react'
import {UserContext} from '../../context/userContext'
import { useState, useContext, useEffect } from 'react';
import getListings from '../lib/getListings';
import Modal from '../components/Modal';

// const {user} = useContext(UserContext)

const BrowsePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getListings(setData);
  }, [])




  return (
    <div style={{backgroundColor: "white"}} className="items-center justify-center w-full h-screen flex flex-row pt-3 pb-3">  {/* browsing page div */}
      <div className='place-items-center grid w-9/10 h-4/5 grid-cols-3'> {/* container that holds the listings */}
      <button className="font-bold p-2 flex justify-center items-center text-gray-300 bg-blue-600 col-span-3 block w-1/5 h-1/4 rounded-3xl transition duration-300 hover:bg-blue-400 cursor-pointer">
        Creating Listing
      </button>
        {data.length > 0 && data.map((listObj) => {
          console.log(listObj);
          return <Modal key={listObj._id} title={listObj.title} description={listObj.description} price={listObj.price} userEmail={listObj.userEmail} />
        })}
      </div>
    </div>
  )
}

export default BrowsePage