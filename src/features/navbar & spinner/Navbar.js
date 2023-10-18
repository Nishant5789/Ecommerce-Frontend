import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutAsync } from "../auth/authSlice";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout= ()=>{
    dispatch(signOutAsync());
    setTimeout(()=>navigate("/login"),500);
  }
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
      <img onClick={()=>setOpenMenu(!openMenu)} src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" className="w-14 h-14  rounded-full"  alt="" />
      <ul className={`${openMenu && "hidden"} absolute flex-col  shadow-lg sm:text-xl shadow-black bg-white rounded-b-lg rounded-l-lg  right-6 top-19`}>
        <Link to='/profile'><li className="hover:bg-purple-500 active:bg-purple-400 border-b-2 px-3 py-2 w-full border-black">My Profile</li></Link>
        <Link to='/order'><li className="hover:bg-purple-500 active:bg-purple-400 border-b-2 px-3 py-2 w-max border-black">Your Order</li></Link>
        <li onClick={handleLogout} className="hover:bg-purple-500 active:bg-purple-400 px-3 w-full py-2 border-black">Logout</li>
      </ul>
      </div>
      <div className="hidden  items-center">
              <Link to="/login">
                <button className="bg-transparent text-white  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                  Log in
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                  Register
                </button>
              </Link>
      </div>
    </div>
  );
};

export default Navbar;
