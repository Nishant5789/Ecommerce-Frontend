import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-purple-600  flex justify-between md:px-24 sm:px-10 px-6 py-2">
    <div className="flex gap-x-4 sm:gap-x-20">
      <div className="flex items-center">
        <img src={"https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"} alt="" />
      </div>
      <ul className="flex items-center sm:gap-x-4 gap-x-2">
      <li>
          <Link
            className="hover:text-yellow-500 text-white font-medium text-xl"
            to="/admin">
            Prducts
          </Link>
      </li>
      <li>
        <Link
          className="hover:text-yellow-500 text-white font-medium text-xl"
          to="/admin/order">
          orders
        </Link>
      </li>
      </ul> 
    </div>
    <div className="relative">
    <img src="https://english.cdn.zeenews.com/sites/default/files/2022/01/30/1010077-gehraaiyan.png" className="w-14 h-14  rounded-full"  alt="" />
    <h1 className='text-white text-2xl'>Admin</h1>
    </div>
  </div>
  )
}

export default Navbar
