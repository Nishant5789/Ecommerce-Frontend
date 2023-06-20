import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <> 
     <div className="h-screen grid grid-cols-3">
  <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 pb-8 px-12">
   
    <div className="rounded-md py-4">
      <form id="payment-form" className='rounded-2xl font-bold'>
        <section>
          <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
            Shipping &amp; Billing Information
          </h2>
          <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-2">Name : </span>
              <input
                name="name"
                className="focus:outline-none my-2 focus:border-2 rounded-lg w-1/2 lg:w-4/5 pl-2 py-2 border-purple-600 "
                placeholder="Enter Your Name"
                required=""
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className=" px-2 ">Email : </span>
              <input
                name="email"
                type="email"
                className="focus:outline-none my-2 focus:border-2 rounded-lg w-1/2 lg:w-4/5 pl-2 py-2 border-purple-600"
                placeholder="Enter Your Email Address"
                required=""
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="">Phone Number:</span>
              <input
                name="number"
                type="tel"
                className="focus:outline-none  focus:border-2 rounded-lg w-1/2 lg:w-4/5  pl-2 py-2 border-purple-600"
                placeholder="Enter Your Phone Number"
                required=""
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-2">Address : </span>
              <input
                name="address"
                className="focus:outline-none my-2 focus:border-2 rounded-lg w-1/2 lg:w-4/5 pl-2 py-2 border-purple-600"
                placeholder="Enter Your Street Address"
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-2">City : </span>
              <input
                name="city"
                className="focus:outline-none my-2 focus:border-2 rounded-lg w-1/2 lg:w-4/5 pl-2 py-2 border-purple-600"
                placeholder="City"
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-2">State : </span>
              <input
                name="state"
                className="focus:outline-none focus:border-2 rounded-lg w-1/2 lg:w-4/5 pl-2 py-2 border-purple-600"
                placeholder="State"
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className=" px-2 ">ZIP : </span>
              <input
                name="postal_code"
                className="focus:outline-none focus:border-2 rounded-lg w-1/2 lg:w-4/5 pl-2 py-2 border-purple-600"
                placeholder="Post Code"
              />
            </label>
            
          </fieldset>
        </section>
      </form>
    </div>

    <div className=''>
    <section>
        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
          Choose Address
        </h2>
        <ul className='flex gap-x-8 border-2 rounded-lg bg-cyan-400 mb-3 border-stone-700 p-4'>
            <li><input type="radio" name="SelectAddress" id="" className='w-5 h-5' /></li>
            <li className='flex flex-grow justify-between'>
                <div>
                <p><span className='font-bold'>Name : </span>Nishant</p>
                <p><span className='font-bold'>City : </span>Killa pardi</p>
                <p><span className='font-bold'>State : </span>Gujarat</p>
                </div>
                <div>
                <p><span className='font-bold'>Phone No : </span>8799407672</p>
                <p><span className='font-bold'>Pin Code : </span>396125</p>
                </div>
            </li>
        </ul>
        <ul className='flex gap-x-8 border-2 rounded-lg bg-cyan-400 mb-3 border-stone-700 p-4'>
            <li><input type="radio" name="SelectAddress" id="" className='w-5 h-5' /></li>
            <li className='flex flex-grow justify-between'>
                <div>
                <p><span className='font-bold'>Name : </span>Nishant</p>
                <p><span className='font-bold'>City : </span>Killa pardi</p>
                <p><span className='font-bold'>State : </span>Gujarat</p>
                </div>
                <div>
                <p><span className='font-bold'>Phone No : </span>8799407672</p>
                <p><span className='font-bold'>Pin Code : </span>396125</p>
                </div>
            </li>
        </ul>
    </section>
    </div>

    <div className="rounded-md">
      <section>
        <h2 className="uppercase tracking-wide text-lg font-bold my-2">
          Choose Payment Method
        </h2>
       
        <ul className='pl-10'> 
            <li><label htmlFor="" className='text-xl font-bold'>UPI Mode : </label> <input type="radio" name="PaymentMode" /> </li>
            <li><label htmlFor="" className='text-xl font-bold'>Cash : </label><input type="radio" name="PaymentMode" /> </li>
        </ul>
      </section>
    </div>
    <div className="bg-purple-700 px-auto  lg:hidden text-white text-xl text-center mx-4 rounded-md py-2 mb-8">
      Order Now
    </div>
  </div>
  <div className="col-span-1 bg-white lg:block hidden">
    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
      Order Summary
    </h1>
    <ul className="py-6 border-b space-y-6 px-8">
      <li className="grid grid-cols-6 gap-2 border-b-1">
        <div className="col-span-1 self-center">
          <img
            src="https://bit.ly/3oW8yej"
            alt="Product"
            className="rounded w-full"
          />
        </div>
        <div className="flex flex-col col-span-3 pt-2">
          <span className="text-gray-600 text-md font-semi-bold">
            Studio 2 Headphone
          </span>
          <span className="text-gray-400 text-sm inline-block pt-2">
            Red Headphone
          </span>
        </div>
        <div className="col-span-2 pt-3">
          <div className="flex items-center space-x-2 text-sm justify-between">
            <span className="text-gray-400">2 x €30.99</span>
            <span className="text-pink-400 font-semibold inline-block">
              €61.98
            </span>
          </div>
        </div>
      </li>
      <li className="grid grid-cols-6 gap-2 border-b-1">
        <div className="col-span-1 self-center">
          <img
            src="https://bit.ly/3lCyoSx"
            alt="Product"
            className="rounded w-full"
          />
        </div>
        <div className="flex flex-col col-span-3 pt-2">
          <span className="text-gray-600 text-md font-semi-bold">
            Apple iPhone 13
          </span>
          <span className="text-gray-400 text-sm inline-block pt-2">Phone</span>
        </div>
        <div className="col-span-2 pt-3">
          <div className="flex items-center space-x-2 text-sm justify-between">
            <span className="text-gray-400">1 x €785</span>
            <span className="text-pink-400 font-semibold inline-block">
              €785
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div className="px-8 border-b">
      <div className="flex justify-between py-4 text-gray-600">
        <span>Subtotal</span>
        <span className="font-semibold text-pink-500">€846.98</span>
      </div>
      <div className="flex justify-between py-4 text-gray-600">
        <span>Shipping</span>
        <span className="font-semibold text-pink-500">Free</span>
      </div>
    </div>
    <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
      <span>Total</span>
      <span>€846.98</span>
    </div>
    <div className=''>
        <div className='bg-purple-700 px-auto text-white text-xl text-center mx-4 rounded-md py-2 mb-2'>Order Now</div>
        <Link to="/"><h1 className='text-center text-xl text-red-700 hover:text-red-900 active:text-red-500'>Continue Shopping</h1></Link>
    </div>
  </div> 
    </div>
 
    </>
  )
}

export default Checkout
 