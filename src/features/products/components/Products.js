import React, { useState } from "react";
import { Link } from "react-router-dom";
import Productcard from "./Productcard";
import Navbar from "../../navbar/Navbar";

const Products = () => {

  const {currentPage, setCurrentPage} = useState(1);
  
  const CategoryArray = [
    {
      label: "smartphones",
      value: "smartphones",
      checked: false,
    },
    {
      label: "laptops",
      value: "laptops",
      checked: false,
    },
    {
      label: "fragrances",
      value: "fragrances",
      checked: false,
    },
    {
      label: "skincare",
      value: "skincare",
      checked: false,
    },
    {
      label: "groceries",
      value: "groceries",
      checked: false,
    },
    {
      label: "home-decoration",
      value: "home-decoration",
      checked: false,
    },
  ];

  const brandsArray = [
    {
      label: "Apple",
      value: "Apple",
      checked: false,
    },
    {
      label: "Samsung",
      value: "Samsung",
      checked: false,
    },
    {
      label: "OPPO",
      value: "OPPO",
      checked: false,
    },
    {
      label: "Huawei",
      value: "Huawei",
      checked: false,
    },
    {
      label: "Microsoft Surface",
      value: "Microsoft Surface",
      checked: false,
    },
    {
      label: "Infinix",
      value: "Infinix",
      checked: false,
    },
    {
      label: "HP Pavilion",
      value: "HP Pavilion",
      checked: false,
    },
    {
      label: "Royal_Mirage",
      value: "Royal_Mirage",
      checked: false,
    },
    {
      label: "Fog Scent Xpressio",
      value: "Fog Scent Xpressio",
      checked: false,
    },
    {
      label: "Al Munakh",
      value: "Al Munakh",
      checked: false,
    },
    {
      label: "Lord - Al-Rehab",
      value: "Lord - Al-Rehab",
      checked: false,
    },
    {
      label: "L'Oreal Paris",
      value: "L'Oreal Paris",
      checked: false,
    },
    {
      label: "Hemani Tea",
      value: "Hemani Tea",
      checked: false,
    },
    {
      label: "Dermive",
      value: "Dermive",
      checked: false,
    },
    {
      label: "ROREC White Rice",
      value: "ROREC White Rice",
      checked: false,
    },
    {
      label: "Fair & Clear",
      value: "Fair & Clear",
      checked: false,
    },
    {
      label: "Saaf & Khaas",
      value: "Saaf & Khaas",
      checked: false,
    },
    {
      label: "Bake Parlor Big",
      value: "Bake Parlor Big",
      checked: false,
    },
    {
      label: "Baking Food Items",
      value: "Baking Food Items",
      checked: false,
    },
    {
      label: "fauji",
      value: "fauji",
      checked: false,
    },
    {
      label: "Dry Rose",
      value: "Dry Rose",
      checked: false,
    },
    {
      label: "Boho Decor",
      value: "Boho Decor",
      checked: false,
    },
    {
      label: "Flying Wooden",
      value: "Flying Wooden",
      checked: false,
    },
    {
      label: "LED Lights",
      value: "LED Lights",
      checked: false,
    },
    {
      label: "luxury palace",
      value: "luxury palace",
      checked: false,
    },
    {
      label: "Golden",
      value: "Golden",
      checked: false,
    },
  ];

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

  const totalProducts = 100;
  const totalProductsPerPage = 9;
  const totalPages = Math.ceil(totalProducts / totalProductsPerPage);

  const paginationArray = Array.from({ length: totalPages }, (_, index) => index+1);
  
  const handlePagination = ()=>{

  }

  return (
    <>
      <Navbar/>
      <div className="grid grid-cols-4  bg-slate-200 mx-8 rounded-lg my-8 shadow-md shadow-black">
        <div className="border-r-4 border-stone-800 overflow-auto">
          <div className="border-b-2 border-stone-700 py-4">
            <h1 className="text-xl font-bold text-center mb-2">Category</h1>
            <ul className="text-center w-max mx-auto space-y-2">
              {CategoryArray.map((Category) => {
                return (
                  <li className="flex justify-between capitalize text-xl font-sans ">
                    <label
                      htmlFor=""
                      className="pr-2">
                      {Category.label}
                    </label>
                    <input
                      type="checkbox"
                      checked={Category.checked}
                      name={Category.value}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-b-2 border-stone-700 py-4">
            <h1 className="text-xl font-bold text-center mb-2">Brands</h1>
            <ul className="text-center w-max mx-auto space-y-2">
              {brandsArray.map((brand) => {
                return (
                  <li className="flex justify-between capitalize text-xl  font-sans ">
                    <label
                      htmlFor=""
                      className="pr-2">
                      {brand.label}
                    </label>
                    <input
                      type="checkbox"
                      checked={brand.checked}
                      name={brand.label}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full flex justify-end py-2 px-6">
            <div>
              <select className="px-4 py-2 bg-white font-bold">
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
          </div>
          <div className="grid grid-cols-3 m-4 gap-4">
          {
            Array.from({ length: 9 }, (_, index) => index+1).map((currItem, index)=>{
              return ( <Productcard />)
            })
          }
            <div className="col-span-3 flex justify-end py-3 ">
              <div className="max-w-2xl mx-auto">
                <nav aria-label="Page navigation example">
                  <ul className="inline-flex space-x-">
                  <li className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-3 px-5 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={()=>handlePagination(currentPage-1, totalProductsPerPage)} >
                        Previous
                    </li>
                {
                  paginationArray.map((PageNO, index)=>{
                    return (                   
                    <li onClick={()=>handlePagination(PageNO, totalProductsPerPage)} className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-3 px-5 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {PageNO}
                    </li>)
                  })
                }
                <li className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-3 px-5 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={()=>handlePagination(currentPage+1, totalProductsPerPage)} >
                        Next
                    </li>
               
                  </ul>
                </nav>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
