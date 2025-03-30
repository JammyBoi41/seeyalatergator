import React from 'react'
import { useState, useContext, useEffect } from 'react';
import getListings from '../lib/getListings';
import Modal from '../parts/Modal';
import {Checkbox} from '@/components/ui/checkbox';


// const {user} = useContext(UserContext)

const BrowsePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //constants
  const categories = ["T-Shirts", "Hoodies", "Gameday", "Pants", "Accessories", "Furniture", "Cosmetics", "Hats"];
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"];
  const conditions = ["Worn", "Used", "Slightly Used", "Like New"];

  useEffect(() => {
    getListings(setData);
  }, [])

  const filteredData = data.filter((listing) =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  )




  return (
    <div style={{backgroundColor: "#f2f4fa"}} className="h-1/12 items-center justify-center w-full flex flex-row pt-3 pb-3">  {/* browsing page div */}
      
      
      <div className="bg-white w-1/8 rounded-2xl shadow-md p-5 flex flex-col mr-10"> {/* filtering sidebar */}
        <h1 className="text-xl font-bold">Categories</h1>
        {categories.map((cat) => {
          return(
            <div>
              <Checkbox key={cat} className="mr-2"></Checkbox>
              {cat}
            </div>
          )
        })}

        <h1 className="text-xl font-bold mt-5"> Conditions </h1>
        {conditions.map((cond) => {
          return (
            <div>
              <Checkbox key={cond} className="mr-2"></Checkbox>
              {cond}
            </div>
          )
        })}

        <h1 className="text-xl font-bold mt-5"> Sizes </h1>
        {sizes.map((size) => {
          return (
            <div>
              <Checkbox key={size} className="mr-2"></Checkbox>
              {size}
            </div>
          )
        })}
      </div>



      <div className='gap-y-5 place-items-center grid w-3/5 h-10/11 grid-cols-3 place-content-center'> {/* container that holds the listings */}
        <input
            type="text"
            placeholder="Search UF apparel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-4/5 mb-4 shadow-md rounded-lg col-span-3 mt-3 bg-white border-1 border-gray-400"
        />
        
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