/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Productcard from './Productcard'
import { fetchProductsAsync, selectProducts } from '../productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalProductsPerPage } from '../../../app/constant';

const ProductList = ({currentPage}) => {

    const ProductArray = useSelector(selectProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProductsAsync({_page:currentPage, _limit:getTotalProductsPerPage}));
    },[])
  return (
    <>
    {
        ProductArray && ProductArray.map((ProductDetails, index)=>{
          return (<Productcard ProductDetails={ProductDetails} />)
        })
    }
    </>
  )
}

export default ProductList
