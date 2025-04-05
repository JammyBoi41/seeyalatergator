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
  const [categoryQuery, setCategoryQuery] = useState([]);
  const [sizeQuery, setSizeQuery] = useState([]);
  const [conditionQuery, setConditionQuery] = useState([]);


  //constants
  const categories = ["T-Shirts", "Hoodies", "Gameday", "Pants", "Accessories", "Furniture", "Cosmetics", "Hats"];
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"];
  const conditions = ["Worn", "Used", "Slightly Used", "Like New"];

  useEffect(() => {
    getListings(setData);
  }, [])

  const filteredData = data.filter((listing) =>
    (listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || listing.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (categoryQuery.length === 0 || categoryQuery.includes(listing.category)) && (sizeQuery.length === 0 || sizeQuery.includes(listing.size)) && 
    (conditionQuery.length === 0 || conditionQuery.includes(listing.condition))
  )






  return (
    <div style={{backgroundColor: "#f2f4fa"}} className="h-11/12 bottom-0 items-center justify-center w-full flex flex-row pt-20 pb-10">  {/* browsing page div */}
      
      
      <div className="bg-white w-1/8 rounded-2xl shadow-md p-5 flex flex-col mr-10"> {/* filtering sidebar */}
        <h1 className="text-xl font-bold">Categories</h1>
        {categories.map((cat) => {
          return(
            <div key={cat}>
              <Checkbox 
                checked={categoryQuery.includes(cat)} 
                onCheckedChange={(e) => {
                  if(e) {
                    setCategoryQuery(prev => [...prev, cat]);
                  } else {
                    setCategoryQuery(prev => prev.filter(item => item !== cat));
                  }
                }}
                className="mr-2"
              />
              {cat}
            </div>
          );
        })}

        <h1 className="text-xl font-bold mt-5"> Conditions </h1>
        {conditions.map((cond) => {
          return(
            <div key={cond}>
              <Checkbox 
                checked={conditionQuery.includes(cond)} 
                onCheckedChange={(e) => {
                  if(e) {
                    setConditionQuery(prev => [...prev, cond]);
                  } else {
                    setConditionQuery(prev => prev.filter(item => item !== cond));
                  }
                }}
                className="mr-2"
              />
              {cond}
            </div>
          );
        })}

        <h1 className="text-xl font-bold mt-5"> Sizes </h1>
        {sizes.map((size) => {
          return(
            <div key={size}>
              <Checkbox 
                checked={sizeQuery.includes(size)} 
                onCheckedChange={(e) => {
                  if(e) {
                    setSizeQuery(prev => [...prev, size]);
                  } else {
                    setSizeQuery(prev => prev.filter(item => item !== size));
                  }
                }}
                className="mr-2"
              />
              {size}
            </div>
          );
        })}
      </div>



      <div className='gap-y-5 place-items-center grid w-4/5 h-10/11 grid-cols-4 place-content-center'> {/* container that holds the listings */}
        <input
            type="text"
            placeholder="Search UF apparel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-4/5 mb-4 shadow-md rounded-lg col-span-4 mt-3 bg-white border-1 border-gray-400"
        />
        
        {filteredData.length > 0 ? (
            filteredData.map((listObj) => {
              return (
                <div key={listObj._id}>
              <Modal
                title={listObj.title}
                description={listObj.description}
                price={listObj.price}
                category={listObj.category}
                condition={listObj.condition}
                size={listObj.size}
                userEmail={listObj.userEmail}
                thumbnail={listObj.thumbnail}
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