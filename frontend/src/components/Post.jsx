//used to display the listings within the Browse page

import React from 'react'

const Post = ({title, description, price, userEmail}) => {
  return (
    <div className="w-4/5 flex flex-col shadow-md border-t-stone-800 rounded-lg cursor-pointer hover:scale-105 transition duration-200"> {/* modal container */}
        <div> {/* image container */}
            <img className="rounded-tl-lg rounded-tr-lg" src="shopping_bag.jpg"/>
        </div> 
        <div className="flex flex-col justify-between p-2">  {/* container that will hold description shi */}
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-gray-600">{title}</h1>
                <h2 className="font-bold text-orange-600">{price}</h2>
            </div>
        
            <h1 className="text-gray-600 text-sm"> {userEmail} </h1>
        </div>
    </div>
  )
}

export default Post