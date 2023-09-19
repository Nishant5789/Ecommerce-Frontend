import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAddressAsync, fetchUserDataAsync, selectUserAddresses, selectUserData } from '../userSlice';

export default function UserProfile() {
  const dispatch = useDispatch();

  const userInfo = useSelector(selectUserData);
  const userAddressData = useSelector(selectUserAddresses);
  
  useEffect(()=>{
    if(userInfo.id != ""){
        dispatch(fetchUserDataAsync());
        dispatch(fetchUserAddressAsync());
    }
  },[userInfo])

  return (
    <div>
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* // role  */}
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            Name: {userInfo.name != null ? userInfo.name: "New User"}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
            email address : {userInfo.email}
          </h3>
          {userInfo.role === 'admin' && (
            <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
              role : {userInfo.role}
            </h3>
          )}
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

            {/* -------------------------- address aform------------------ */}
          
        {/* ------------------------------all adress------------------ */}
          <p className="mt-0.5 text-sm text-gray-500">Your Addresses :</p>
          {userAddressData.map((address, index) =>{
            console.log(address);
            const {name, email, id, phoneNumber, pinCode,streetAddress, city, state} = address;
            return (
                <div key={index}>
                   
                  <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-xl font-semibold leading-6 text-gray-900">
                          {name}
                        </p>
                        <p className="mt-1  text-xl leading-5 ">
                          {streetAddress}
                        </p>
                        <p className="mt-1  text-xl leading-5 ">
                          {pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-center">
                      <p className="text-xl leading-6 text-gray-900">
                        Phone: {phoneNumber}
                      </p>
                      <p className="text-xl   text-gray-900">
                        {city}
                      </p>
                    </div>
                    
                  </div>
                </div>
              )
          } )}

        </div>
      </div>
    </div>
    
  );
}