import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=> store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className="w-[200px] p-5 shadow-lg  bg-gray-100 ml-2 fixed l-0  overflow-y-scroll h-screen max-h-[90vh]">
      <ul className="font-bold ml-4 text-gray-700 mt-4">
        
        <li ><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold mt-3 mb-3 text-xl underline'>Explore</h1>
      <ul className='font-semibold ml-4 text-gray-700'>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold mt-3 mb-3 text-xl underline'>Subscriptions</h1>
      <ul className='font-semibold ml-4 text-gray-700'>
        <li>TakeUforward</li>
        <li>Unq Gamer</li>
        <li>Naa Anveshana</li>
        <li>301 Dairies</li>
        <li>Apna College</li>
      </ul>
      <h1 className='font-bold mt-3 mb-3 text-xl underline'>youtube apps</h1>
      <ul className='font-semibold ml-4 text-gray-700'>
        <li>Youtube premium</li>
        <li>Youtube Studio</li>
        <li>Toutube Music</li>
        <li>Youtube Kids</li>
        <li>Education</li>
      </ul>

     <h1 className='font-bold mt-5 mb-3 text-xl ml-1 underline  ' >Settings</h1>
     
    </div>
  )
}

export default Sidebar
