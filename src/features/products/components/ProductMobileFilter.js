/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, selectBrand, selectCategory, selectQueryUrl, updateQueryUrl } from '../productSlice';
const ProductMobileFilter = ({ItemName}) => {
    const dispatch = useDispatch();
    const queryUrlObject = useSelector(selectQueryUrl);

    const selectItems = useSelector(ItemName==="category"?selectCategory:selectBrand);

    const handleSelectMenuByProducts = (e) => {
        // console.log(e.target);
        if(e.target.value !== `Choose ${ItemName}`)
        {
        //   const selectOption = selectItems.filter((item)=>item.value === e.target.value);
        //   const {sort, order} = selectOption[0];
          // console.log({sort, order});
        //   dispatch(updateQueryUrl({_sort:sort}));
        //   dispatch(updateQueryUrl({_order:order}));
        }
      }
    useEffect(()=>{
        if(queryUrlObject.isupdated){
            dispatch(fetchProductsAsync(queryUrlObject));
        }
    },[queryUrlObject])
    
  return (
    <select className="px-4  md:hidden py-2 bg-white font-bold" >
    <option className="px-4 py-2 capitalize">Choose {ItemName}</option>
    {selectItems.map((item) => {
      return (
        <option
          className="px-4 py-2"
          onChange={(e)=>handleSelectMenuByProducts(e)}
          value={item.value} >
          {item.value}
        </option>
      );
    })}
  </select>
  )
}

export default ProductMobileFilter
