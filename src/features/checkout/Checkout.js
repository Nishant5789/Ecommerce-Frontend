/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUserAddressAsync, fetchUserAddressAsync, selectUserAddresses } from "../user/userSlice";
import { fetchCartItemsAsync, selectCartItems } from "../cart/cartSlice";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { gettoastOptions } from "../../app/constant";

const Checkout = () => {
  const {register,handleSubmit,watch,reset,formState: { errors }} = useForm();
  const [subTotal, setSubtotal] = useState(0);
  const [selectdAddress, setSelectdAddress] = useState(null);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
  const dispatch = useDispatch();
  const addressArray = useSelector(selectUserAddresses);
  const cartItemArray = useSelector(selectCartItems);

  const onSubmit = (data) => {
    // console.log(data);
    // reset();
    dispatch(addUserAddressAsync(data));     
  };

  const handleOrder = ()=>{
    if(selectedPaymentMode && selectdAddress){
      // console.log("Order selected");
    }else{
      selectdAddress===null && selectedPaymentMode===null && toast.error("Address and PaymentMode not selected", gettoastOptions());
      selectdAddress===null && selectedPaymentMode!==null && toast.error("Address  not selected", gettoastOptions());
      selectdAddress!==null && selectedPaymentMode===null && toast.error("PaymentMode not selected", gettoastOptions());
    }
  }

  useEffect(() => {
    if (cartItemArray.length > 0) {
      const finalSubTotal = cartItemArray.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity, 0 );
      setSubtotal(finalSubTotal);
    }
  }, [cartItemArray]);

  useEffect(()=>{
    dispatch(fetchUserAddressAsync());
    dispatch(fetchCartItemsAsync());
  },[])

  return (
    <>
      <div className="h-screen grid grid-cols-3 m-4">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 pb-8 px-12">
          <div className="rounded-md py-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl font-bold">
              
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping &amp; Billing Information
                </h2>
                <div className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2">Name:</span>
                    <input
                      className="focus:outline-none my-2 focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="Enter Your Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-red-500 ml-4">Name is required</span>
                  )}

                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2">Email:</span>
                    <input
                      type="email"
                      novalidate="novalidate"
                      className="focus:outline-none my-2 focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="Enter Your Email Address"
                      {...register("email", { required: true })}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-500 ml-4">Email is required</span>
                  )}

                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2" >Phone Number:</span>
                    <input
                      type="tel"
                      className="focus:outline-none focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="Enter Your Phone Number"
                      {...register("phoneNumber", { required: true })}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <span className="text-red-500 ml-4">
                      Phone Number is required
                    </span>
                  )}

                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2">Address:</span>
                    <input
                      className="focus:outline-none my-2 focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="Enter Your Street Address"
                      {...register("streetAddress", { required: true })}
                    />
                  </div>
                  {errors.streetAddress && (
                    <span className="text-red-500 ml-4">Address is required</span>
                  )}

                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2">City:</span>
                    <input
                      className="focus:outline-none my-2 focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                  </div>
                  {errors.city && (
                    <span className="text-red-500 ml-4">City is required</span>
                  )}

                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2">State:</span>
                    <input
                      className="focus:outline-none focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="State"
                      {...register("state", { required: true })}
                    />
                  </div>
                  {errors.state && <span className="text-red-500 ml-4">State is required</span>}
                  <div className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="px-2">Pincode:</span>
                    <input
                      className="focus:outline-none focus:border-2 rounded-lg w-3/4 lg:w-4/5 pl-2 py-2 border-purple-600"
                      placeholder="pin Code"
                      {...register("pinCode", { required: true })}
                    />
                  </div>
                  {errors.pinCode && <span className="text-red-500 ml-4">Pincode is required</span>}
                  <div className='flex justify-end gap-x-2'>
                    {/* <button className='bg-purple-600 hover:bg-purple-700 px-4  text-white  text-center rounded-md py-2 m-4'>
                     Reset Form
                    </button> */}
                    <button type="submit" className='bg-purple-600 hover:bg-purple-700 px-4  text-white  text-center rounded-md py-2 m-4'>
                     Add New Address
                    </button>
                  </div>
                </div>
           </form>
          </div>
          {/* choose address  */}
          <div className="">
              <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                Choose Address
              </h2>
              {addressArray.map((address, index)=>{
                const {name, streetAddress, city, state, phoneNumber, email, pinCode} = address;
                return (
              <ul onClick={()=>setSelectdAddress((prev)=>prev===index+1?null:index+1)} className={`flex gap-x-8 border-2 text-white  ${selectdAddress===(index+1) ? "bg-purple-900":"bg-purple-600"} mb-3 border-stone-700 p-4`}>
                <li>
                  <span className={`px-3 ring-2  ring-black rounded-full ${selectdAddress===(index+1) ? "bg-stone-800":"bg-white"}`}></span>
                </li>
                <li className="flex flex-col sm:flex-row sm:flex-grow sm:justify-between">
                  <div>
                    <p>
                      <span className="font-bold">Name : </span>{name}
                    </p>
                    <p>
                      <span className="font-bold">City : </span>{city}
                    </p>
                    <p>
                      <span className="font-bold">State : </span>{state}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold">Phone No : </span>{phoneNumber}
                    </p>
                    <p>
                      <span className="font-bold">Pin Code : </span>{pinCode}
                    </p>
                  </div>
                </li>
              </ul>)
              })}
          </div>
          {/* paytment mode  */}
          <div className="rounded-md">
            <section>
              <h2 className="uppercase tracking-wide text-lg font-bold my-2">
                Choose Payment Method
              </h2>
              <ul className="pl-10">
                <li onClick={()=>setSelectedPaymentMode((prev)=>prev==="UPI"?null:"UPI")}>
                  <label
                    className="text-xl font-bold">
                    UPI Mode :{" "}
                  </label>{" "}
                  <input
                    type="radio"
                    name="PaymentMode"
                    value="UPI"
                    checked={selectedPaymentMode === "UPI"? true:false}
                  />{" "}
                </li>
                <li onClick={()=>setSelectedPaymentMode((prev)=>prev==="CASH"?null:"CASH")}>
                  <label
                    className="text-xl font-bold">
                    Cash :{" "}
                  </label>
                  <input
                    type="radio"
                    name="PaymentMode"
                    value="CASH"
                    checked={selectedPaymentMode === "CASH"? true:false} 
                  />{" "}
                </li>
              </ul>
            </section>
          </div>
          <button onClick={handleOrder}  className="bg-purple-700 px-4  lg:hidden text-white text-xl text-center mx-4 rounded-md py-2 mb-8">
            Order Now
          </button>
        </div>

        {/*  order Summary */}
        <div className="col-span-1 bg-white  lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>
          <ul className="py-6 border-b space-y-6 px-8">
          {
            cartItemArray.map((item)=>{
              const { id, images, price, rating, stock, category, thumbnail, title } = item.product
              return(
              <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src={thumbnail}
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  {title}
                </span>
                <span className="text-gray-400 text-sm inline-block pt-2">
                  {category}
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">{item.quantity} x ${price}</span>
                  <span className="text-pink-400 font-semibold inline-block">
                  ${price * item.quantity}
                  </span>
                </div>
              </div>
            </li>);
            })
          }
           
          </ul>
          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-pink-500">$ {subTotal}</span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-pink-500">$ 4.99</span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>$ {Math.floor(subTotal+4.99)}</span>
          </div>
          <div className="">
            <div onClick={handleOrder} className="bg-purple-700 px-auto text-white text-xl text-center mx-4 rounded-md py-2 mb-2">
              Order Now
            </div>
            <Link to="/">
              <h1 className="text-center text-xl text-red-700 hover:text-red-900 active:text-red-500">
                Continue Shopping
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
