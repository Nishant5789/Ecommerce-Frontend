/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Productcard from './Productcard'
import { fetchProductsAsync, selectProducts, selectQueryUrl } from '../productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalProductsPerPage } from '../../../app/constant';

const ProductList = ({currentPage}) => {

    const ProductArray = useSelector(selectProducts);
    const queryUrlObject = useSelector(selectQueryUrl);

    const dispatch = useDispatch();
    useEffect(()=>{
        if(queryUrlObject) {
            // console.log("called")
            dispatch(fetchProductsAsync(queryUrlObject));
        }
    },[queryUrlObject])

  return (
    <>
       {/* <div className='h-screen'> */}
    {
        ProductArray && ProductArray.map((ProductDetails, index)=>{
          return (<Productcard ProductDetails={ProductDetails} />)
        })
    }

    {/* </div> */}
    </>
  )
}

export default ProductList
