/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrdersAsync, selectOrders } from '../orderSlice';
import { selectLoggedInUser } from '../../auth/authSlice';

const Order = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectLoggedInUser);
  const orderArray = useSelector(selectOrders);


  useEffect(()=>{
    dispatch(fetchAllOrdersAsync(loggedUser.id));
  },[])

  return (
   <div className='bg-slate-200 py-4  min:h-screen flex justify-center'>
   <div className='w-3/4'>
    <h1 className='text-center text-2x l font-bold py-4'>My Orders</h1>
    {
      orderArray && orderArray.map((order)=>{
        return (
    <div className='bg-white my-4 shadow-lg p-4'>
    {/* items  */}
    <ul className=''>
      <li>
        <h1 className='text-3xl text-center font-bold'>order # 455384509fej234</h1>
        <h2 className='text-red-600 text-xl'>orderstatus : pending</h2>
        {
          order.items.map((item, index)=>{
            const {thumbnail, title, category , brand} = item;
            return (
              <div className='flex gap-x-4 bg-cyan-400 m-2 p-2'>
                <div><img className='sm:h-32 h-24' src={thumbnail} alt="" /></div>
                <ul>
                  <li className='font-bold text-xl'>{title}</li>
                  <li>brand : {brand}</li>
                  <li>category : {category}</li>
                  {/* <li>Qty: <span className='font-bold'>{order.itemsQunatity[index]}</span></li> */}
                </ul>
              </div>
            )
          })
        }
      </li>
    </ul>
    {/* subtotal  */}
    <ul className=''>
      <li className='flex font-bold justify-between px-8'>
        <span>SubTotal</span>
        <span>$ {order.totalAmount}</span>
      </li>
      <li className='flex font-bold  justify-between px-8'>
        <span>Total Items in Cart</span>
        <span>{order.totalItems}</span>
      </li>
      <li className='px-6'>
        <h1 className='text-2xl text-blue-700 font-bold'>Shipping Address : </h1>
       <ul className='border-2 bg-purple-700 text-white  border-black mt-4 p-4'>
       <li className='flex flex-col font-bold sm:flex-row justify-between px-6'>
        <span>Name : {order.selectedAddress.name}</span>
        <span>Phone No : {order.selectedAddress.phoneNumber}</span>
      </li>
       <li className='flex flex-col font-bold sm:flex-row justify-between px-6'>
        <span>City :  {order.selectedAddress.city}</span>
        <span>Pin Code :  {order.selectedAddress.pinCode}</span>
      </li>
       <li className='flex px-6'>
        <span>State :  {order.selectedAddress.state}</span>
      </li>
       </ul>
      </li>
    </ul>
    </div>
        )
      })
    }

   </div>
   </div>
  ) 
}

export default Order
