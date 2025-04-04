//used to display the listings within the Browse page

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import Chatbox from '../components/ui/chatbox'

const Modal = ({title, description, price, userEmail, thumbnail}) => {

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col shadow-md border-t-stone-800 rounded-lg cursor-pointer hover:shadow-2xl transition duration-200"> {/* modal container */}
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
      </DialogTrigger>


      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <img src={thumbnail}/>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex justify-center items-center">
          <Chatbox newUser={userEmail}/>
          <h1 className="font-bold">Message {userEmail}</h1>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
}

export default Modal