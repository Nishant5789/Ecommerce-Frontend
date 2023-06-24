import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="bg-purple-600  flex justify-between md:px-14 sm:px-10 px-6 py-4">
      <div className="flex gap-x-4">
        <div className="flex items-center">
          <img src={"https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"} alt="" />
        </div>
        <ul className="flex items-center sm:gap-x-4 gap-x-2">
        <li>
            <Link
              className="hover:text-yellow-500 text-white font-medium text-xl"
              to="/">
              Home
            </Link>
        </li>
        <li>
          <Link
            className="hover:text-yellow-500 text-white font-medium text-xl"
            to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-yellow-500 text-white font-medium text-xl"
            to="#">
            About
          </Link>
        </li>
        </ul> 
      </div>
      <div className="relative">
      <img onClick={()=>setOpenMenu(!openMenu)} src="https://english.cdn.zeenews.com/sites/default/files/2022/01/30/1010077-gehraaiyan.png" className="w-14 h-14  rounded-full"  alt="" />
      <ul className={`${openMenu && "hidden"} absolute flex-col  shadow-lg sm:text-xl shadow-black bg-white rounded-b-lg rounded-l-lg  right-6 top-19`}>
        <Link to='/profile'><li className="hover:bg-purple-500 active:bg-purple-400 border-b-2 px-3 py-2 w-full border-black">Profile</li></Link>
        <Link to='/order'><li className="hover:bg-purple-500 active:bg-purple-400 border-b-2 px-3 py-2 w-max border-black">Your Order</li></Link>
        <Link to='/logout'><li className="hover:bg-purple-500 active:bg-purple-400 px-3 w-full py-2 border-black">Logout</li></Link>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
