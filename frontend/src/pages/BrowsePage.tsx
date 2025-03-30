import React from 'react'
import {UserContext} from '../../context/userContext'
import { useState, useContext, useEffect } from 'react';
import getListings from '../lib/getListings';
import Modal from '../components/Modal';

// const {user} = useContext(UserContext)

const BrowsePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getListings(setData);
  }, [])

  const filteredData = data.filter((listing) =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  )




  return (
    <div style={{backgroundColor: "white"}} className="grow-1 items-center justify-center w-full flex flex-col pt-3 pb-3">  {/* browsing page div */}
      <div className='gap-y-5 place-items-center grid w-3/5 h-10/11 grid-cols-3 place-content-center'> {/* container that holds the listings */}
      <input
          type="text"
          placeholder="Search UF apparel..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-4/5 mb-4 shadow-md rounded-lg col-span-2 mt-3"
      />
      <button className="font-bold p-5 flex justify-center items-center text-gray-300 bg-blue-600 col-span-1 h-1/4 rounded-3xl transition duration-300 hover:bg-blue-400 cursor-pointer">
        Create Listing
      </button>
      
      {filteredData.length > 0 ? (
          filteredData.map((listObj) => {
            return (
              <div key={listObj._id}>
            <Modal
              title={listObj.title}
              description={listObj.description}
              price={listObj.price}
              userEmail={listObj.userEmail}
            />
          </div>
            );
          })
        ) : (
          <h1>No available listings!</h1> 
        )}
      </div>
    </div>
  )
}

export default BrowsePage