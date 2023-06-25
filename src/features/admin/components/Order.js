/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrdersAsync, selectAllOrders } from '../adminSlice';

const Order = () => {
  const dispatch = useDispatch();
  const AllorderArray = useSelector(selectAllOrders);
  console.log(AllorderArray);

  useEffect(()=>{
    dispatch(fetchAllOrdersAsync());
  },[]);

  return (
    <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex  justify-center  font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="text-center">OrderId</th>
                                <th class="text-center">Items</th>
                                <th class="text-center">Subtotal</th>
                                <th class="text-center">Address</th>
                                <th class="text-center">OrderStatus</th>
                                <th class="text-center">PaymentMode</th>
                                <th class="text-center">PaymentStatus</th>
                                <th class="text-center">OrderDate</th>
                                <th class="text-center">Operation</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                      {
                        AllorderArray.map((order)=>{
                          const {orderStatus,paymentMode,paymentStatus,id,items,totalAmount,selectedAddress} = order;
                          return (
                            <tr className='border-b border-gray-200 my-4 hover:bg-gray-100'>
                              <td class="text-center">{id} </td>
                              <td class="text-center">
                              {
                                items.map((item, index)=>{
                                  const {title, price} = item;
                                  return (
                                    <ul>
                                      <li className='text-left font-semibold'><span className='font-bold'>{index+1}.</span> {title} 
                                      {/* <span className='font-bold text-xs text-red-600 ml-4'> {order.itemsQunatity[index]} * $ {price}</span> */}
                                      </li>
                                    </ul>
                                  )
                                })
                              }
                              </td>
                              <td class="text-center">{totalAmount} </td>
                              <td class="text-center  w-36">
                              
                              {selectedAddress.streetAddress}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.pinCode}
                              
                              </td>
                              <td class="text-center">{orderStatus} </td>
                              <td class="text-center">{paymentMode} </td>
                              <td class="text-center">{paymentStatus} </td>
                              <td class="text-center">{"12/03/2004"} </td>
                              <td class="text-center">Operation </td>
                            </tr>
                          )
                        })
                      }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Order
