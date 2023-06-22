/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItemsAsync, updateCartItemsAsync } from "./cartSlice";

const CartItems = ({cartItemArray}) => {
  const dispatch = useDispatch();

  const handleQunatityfield = (currQuatity, cartItemId ,operationType)=>{
    if(operationType === "increse"){
      currQuatity>=1 && currQuatity<=4 && dispatch(updateCartItemsAsync({ quantity: currQuatity+1, cartItemId }))
    }
    else{
      currQuatity>=2 && currQuatity<=5 && dispatch(updateCartItemsAsync({ quantity: currQuatity-1, cartItemId}));
    }
  }



  return ( 
    <div className="rounded-lg bg-slate-200 p-4  md:w-2/3 h-96 overflow-y-scroll">
      {cartItemArray.map((item) => {
        const { id, images, price, rating, stock, category, thumbnail, title } = item.product;
        return (
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={thumbnail}
              alt="producImage"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="mt-1 text-xs text-gray-700">{category}</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <span onClick={()=>handleQunatityfield(item.quantity, item.id,"increse")} className="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    +
                  </span>
                  <span className="cursor-pointer bg-gray-200 py-1 px-3.5 duration-1000 hover:bg-blue-500 hover:text-blue-50">
                    {item.quantity}
                  </span>
                  <span onClick={()=>handleQunatityfield(item.quantity, item.id,"decrese")} className="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    -
                  </span>
                </div>
                <div className="flex items-center  space-x-4">
                  <p className="text-2xl font-bold">{price} $</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    onClick={()=>dispatch(removeCartItemsAsync(item.id))}
                    className="h-10 w-10 bg-red-600 shadow-md rounded-xl active:bg-red-400 text-white cursor-pointer duration-150 hover:text-black">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
