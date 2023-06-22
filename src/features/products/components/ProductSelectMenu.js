/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, selectQueryUrl, updateQueryUrl } from '../productSlice';

const ProductSelectMenu = () => {

    const dispatch = useDispatch();
    const queryUrlObject = useSelector(selectQueryUrl);

    const sortOptions = [
        { 
            name: "Best Rating", sort: "rating", order: "desc", current: false 
        },
        {
          name: "Price: Low to High", sort: "price", order: "asc",current: false,
        },
        {
          name: "Price: High to Low", sort: "price", order: "desc", current: false,
        }
    ];

    const handleSortByProducts = (e) => {
        if(e.target.value !== "Sort By")
        {
          const selectOption = sortOptions.filter((option)=>option.name === e.target.value);
        //   console.log(selectOption);
          const {sort, order} = selectOption[0];
          // console.log({sort, order});
          dispatch(updateQueryUrl({_sort:sort}));
          dispatch(updateQueryUrl({_order:order}));
        }
      }
    useEffect(()=>{
        if(queryUrlObject.isupdated){
            dispatch(fetchProductsAsync(queryUrlObject));
        }
    },[queryUrlObject])
    
  return (
    <select className="px-4 py-2 bg-white font-bold" onChange={(e)=>handleSortByProducts(e)}>
    <option className="px-4 py-2">Sort By</option>
    {sortOptions.map((option) => {
      return (
        <option
          className="px-4 py-2"
          value={option.name}>
          {option.name} 
        </option>
      );
    })}
  </select>
  )
}

export default ProductSelectMenu
