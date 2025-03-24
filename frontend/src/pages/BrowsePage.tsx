import React from 'react'
import {UserContext} from '../../context/userContext'
import { useContext } from 'react';

const BrowsePage = () => {
    const {user} = useContext(UserContext)

  return (
    <div>Welcome, {!!user && user.name}</div>
  )
}

export default BrowsePage