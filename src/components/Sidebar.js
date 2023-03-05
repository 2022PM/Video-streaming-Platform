import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import store from '../utils/store'

const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>

    <ul>
      <li className='font-bold'>  <Link to="/"> Home</Link> </li>
      <li className='font-bold'>Shorts</li>
      <li className='font-bold'>Subscription</li>
    </ul>

    <h1 className='font-bold pt-8'>Explore</h1>
    <ul>
      <li>Music</li>
      <li>Trending</li>
      <li>Live</li>
      <li>Games</li>
      <li>Shoping</li>
    </ul>

    <h1 className='font-bold pt-8'>Subscription</h1>
    <ul>
      <li>Sourav joshi vlogs</li>
      <li>lakshay chodhary</li>
      <li>Round to hell</li>
      <li>Teachnical guruji</li>
      <li>BB ki vines</li>
    </ul>

    

    </div>
  )
}

export default Sidebar