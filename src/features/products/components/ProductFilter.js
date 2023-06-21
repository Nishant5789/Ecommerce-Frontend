/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrandAsync, fetchCategoryAsync, fetchProductsAsync, selectBrand, selectCategory, selectQueryUrl, updateQueryUrl } from '../productSlice';

const ProductFilter = ({ItemName, currentPage}) => {

    const dispatch = useDispatch();
    const [itemsCheckboxes, setItemsCheckboxes] = useState([]);

    const queryUrlObject = useSelector(selectQueryUrl);

    const filterItems = useSelector(ItemName==="category"?selectCategory:selectBrand);

    const handleFilterItems = (e) => {
        const {value, checked} = e.target;
        console.log(value, checked);
        if(checked){
            setItemsCheckboxes([...itemsCheckboxes, value]);
            dispatch(updateQueryUrl({[ItemName]: value}));
        }
        else{
            setItemsCheckboxes(itemsCheckboxes.filter((item)=>item!==value));
            dispatch(updateQueryUrl({[ItemName]: ""}));
        }
      }
    useEffect(()=>{
      dispatch(fetchBrandAsync());
      dispatch(fetchCategoryAsync());
    },[])

    useEffect(()=>{
        if(queryUrlObject.isupdated){
            dispatch(fetchProductsAsync(queryUrlObject));
        }
    },[queryUrlObject])
    
  return (
    <div className="border-b-2 border-stone-700 py-4">
            <h1 className="text-xl font-bold capitalize text-center mb-2">{ItemName}</h1>
            <ul className="text-center w-max mx-auto space-y-2">
              {filterItems && filterItems.map((Item, index) => { 
                return (
                  <li className="flex justify-between capitalize text-xl font-sans" key={index}>
                    <label
                      htmlFor=""
                      className="pr-2">
                      {Item.label}
                    </label>
                    <input
                      type="checkbox"
                      checked={itemsCheckboxes.includes(Item.value)}
                      value={Item.value}
                      onChange={(e)=>handleFilterItems(e)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
  )
}

export default ProductFilter
