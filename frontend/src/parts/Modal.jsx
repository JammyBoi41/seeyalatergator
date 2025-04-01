//used to display the listings within the Browse page

import React from 'react'

const Modal = ({title, description, price, userEmail, thumbnail}) => {
  return (
    <div className="w-80flex flex-col shadow-md border-t-stone-800 rounded-lg cursor-pointer hover:shadow-2xl transition duration-200"> {/* modal container */}
        <div> {/* image container */}
            <img className="w-full h-50 rounded-tl-lg rounded-tr-lg" src={thumbnail || "shopping_bag.jpg"}/>
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

export default Modal