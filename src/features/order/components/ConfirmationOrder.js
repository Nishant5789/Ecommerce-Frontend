import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectCurrOrder } from '../orderSlice';

const ConfirmationOrder = ({orderID}) => {

  const dispatch = useDispatch();
  const {confirmationId} = useParams();
  

  // useEffect(()=>{
    
  // },[])

  return (
    <div className='h-screen flex justify-center items-center'>
    <div className='bg-slate-300  sm:max-w-7xl max-w-xl  py-4 md:p-20 rounded-lg shadow-2xl'>
      <div>
        <h1 className='text-center text-purple-700 font-bold text-3xl'>Your order is confirmed: {confirmationId}</h1>
        <p className='text-center text-2xl'>Check Your Order Status <Link to="/user/order"><span className='border-b-2 border-yellow-400 font-bold hover:text-yellow-300'>UserProfile{'->'}order</span></Link> </p>
      </div>
      <div className='flex justify-center mt-4'>
       <Link to='/'> <button className='bg-purple-600 hover:bg-purple-700 active:bg-purple-400 text-white px-4 py-2 rounded-md'>Back to home Page</button></Link>
      </div>
    </div>
    </div>
  )
}

export default ConfirmationOrder
