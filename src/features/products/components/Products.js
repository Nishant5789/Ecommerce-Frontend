/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect, useState } from "react";
import Navbar from "../../navbar & spinner/Navbar";
import { fetchProductsAsync, selectBrand, selectCategory, selectQueryUrl, updateQueryUrl } from "../productSlice";
import {  useDispatch, useSelector } from "react-redux";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import ProductPagination from "./ProductPagination";
import { getTotalProductsPerPage, gettoastOptions } from "../../../app/constant";
import ProductSelectMenu from "./ProductSelectMenu";
import ProductMobileFilter from "./ProductMobileFilter";
import {  toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectCartMsg } from "../../cart/cartSlice";



const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const totalProductPerPage = getTotalProductsPerPage();

  const queryUrlObject = useSelector(selectQueryUrl);
  // const categoryArray =  useSelector(selectCategory);
  // const brandsArray =  useSelector(selectBrand);
  const cartMsg = useSelector(selectCartMsg);

  // console.log(categoryArray);
  // console.log(brandsArray);
    

    useEffect(()=>{
      if(queryUrlObject.isupdated){
          dispatch(fetchProductsAsync(queryUrlObject));
      }
  },[queryUrlObject])

  useEffect(()=>{
    if(cartMsg){
      if(cartMsg === "Product already exists"){
        toast.error(cartMsg, gettoastOptions());
      }else{
        toast.success(cartMsg, gettoastOptions());
      }
    }
  },[cartMsg])


  return (
    <> 
      <Navbar/>
      <div className="grid grid-cols-8 bg-slate-200  rounded-lg  shadow-md shadow-black">
        <div className="border-r-4 md:col-span-3 lg:col-span-2 md:block hidden  border-stone-800 overflow-auto">
          <ProductFilter  ItemName={"category"} currentPage={currentPage}/>
          <ProductFilter  ItemName={"brand"} currentPage={currentPage}/>
        </div>
        <div className="lg:col-span-6 md:col-span-5 col-span-8">
          <div className=" w-full flex flex-wrap gap-3 justify-between py-2 px-6">
              <ProductMobileFilter ItemName={"category"} /> 
              <ProductMobileFilter ItemName={"brand"} /> 
              <ProductSelectMenu />
          </div>
          <div className="grid  sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 m-4 gap-4">
          <ProductList />
          <ProductPagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Products;
