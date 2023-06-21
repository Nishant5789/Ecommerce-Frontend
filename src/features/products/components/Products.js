/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from "react";
import Navbar from "../../navbar/Navbar";
import { selectBrand, selectCategory } from "../productSlice";
import {  useSelector } from "react-redux";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import ProductPagination from "./ProductPagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const sortOptions = [
    { name: "Best Rating", sort: "rating", order: "desc", current: false },
    {
      name: "Price: Low to High",
      sort: "discountPrice",
      order: "asc",
      current: false,
    },
    {
      name: "Price: High to Low",
      sort: "discountPrice",
      order: "desc",
      current: false,
    },
  ];
  
  const categoryArray =  useSelector(selectCategory);
  const brandsArray =  useSelector(selectBrand);

  // console.log(categoryArray);
  // console.log(brandsArray);

  const handleSortByProducts = (e) => {
    console.log(e.target.value);
  }
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
            <select className="px-4  md:hidden py-2 bg-white font-bold" onChange={(e)=>handleSortByProducts(e)}>
                <option className="px-4 py-2">Choose brand</option>
                {brandsArray.map((option) => {
                  return (
                    <option
                      className="px-4 py-2"
                      value={option.value}>
                      {option.value}
                    </option>
                  );
                })}
              </select>
              <select className="px-4 py-2  md:hidden  bg-white font-bold" onChange={(e)=>handleSortByProducts(e)}>
                <option className="px-4 py-2">choose category</option>
                {categoryArray.map((option) => {
                  return (
                    <option
                      className="px-4 py-2"
                      value={option.value}>
                      {option.value}
                    </option>
                  );
                })}
              </select>
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
            </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 m-4 gap-4">
          <ProductList />
          <ProductPagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
