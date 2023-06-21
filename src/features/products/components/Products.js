/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import Navbar from "../../navbar/Navbar";
import { fetchBrandAsync, fetchCategoryAsync, fetchProductsAsync, selectBrand, selectCategory, selectProducts, selectTotalFetchProducts } from "../productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryCheckboxes, setCategoryCheckboxes] = useState([]);
  const [brandsCheckboxes, setBrandsCheckboxes] = useState([]);
  
  const oldCategoryArray = [
    {
      label: "smartphones",
      value: "smartphones",
      checked: false,
    }
  ];

  const oldbrandsArray = [
    {
      label: "Golden",
      value: "Golden",
      checked: false,
    }
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

  const ProductArray =  useSelector(selectProducts);
  const categoryArray =  useSelector(selectCategory);
  const brandsArray =  useSelector(selectBrand);
  const dispatch = useDispatch();

  // console.log(categoryArray);
  // console.log(brandsArray);
  const totalProducts = useSelector(selectTotalFetchProducts);
  const totalProductsPerPage = 10;
  const totalPages = Math.ceil(totalProducts/totalProductsPerPage);

  const paginationArray = Array.from({ length: totalPages }, (_, index) => index+1);
  
  const handlePagination =(PageNO, totalProductsPerPage)=>{
    if(PageNO>=1 && PageNO<=totalPages){
      console.log(PageNO, totalProductsPerPage);
      dispatch(fetchProductsAsync({_page:PageNO, _limit:totalProductsPerPage}));
      setCurrentPage(PageNO);
    }
  }

  const handleSortByProducts = (e) => {
    console.log(e.target.value);
  }

  const handleFilterCategory = (e) => {
    const {value, checked} = e.target;
    console.log(value, checked);
    if(checked)
    {
      setCategoryCheckboxes([...categoryCheckboxes, value]);
      dispatch(fetchProductsAsync({_page:currentPage, _limit:totalProductsPerPage, category: value}));
    }
    else{
      setCategoryCheckboxes(categoryCheckboxes.filter((item)=>item!==value));
      dispatch(fetchProductsAsync({_page:currentPage, _limit:totalProductsPerPage}));
    }
  }

  const handleFilterBrands = (e) => {
    const {value, checked} = e.target;
    console.log(value, checked);
    if(checked)
    {
      setBrandsCheckboxes([...brandsCheckboxes, value]);
      dispatch(fetchProductsAsync({_page:currentPage, _limit:totalProductsPerPage, brand: value}));
    }
    else{
      setBrandsCheckboxes(brandsCheckboxes.filter((item)=>item!==value));
      dispatch(fetchProductsAsync({_page:currentPage, _limit:totalProductsPerPage}));
    }
  }

  useEffect(()=>{
    dispatch(fetchProductsAsync({_page:currentPage, _limit:totalProductsPerPage}));
    dispatch(fetchBrandAsync());
    dispatch(fetchCategoryAsync());
  },[])

  return (
    <>
      <Navbar/>
      <div className="grid grid-cols-8 bg-slate-200  rounded-lg  shadow-md shadow-black">
        <div className="border-r-4 md:col-span-3 lg:col-span-2 md:block hidden  border-stone-800 overflow-auto">
          <div className="border-b-2 border-stone-700 py-4">
            <h1 className="text-xl font-bold text-center mb-2">Category</h1>
            <ul className="text-center w-max mx-auto space-y-2">
              {categoryArray && categoryArray.map((Category, index) => {
                return (
                  <li className="flex justify-between capitalize text-xl font-sans" key={index}>
                    <label
                      htmlFor=""
                      className="pr-2">
                      {Category.label}
                    </label>
                    <input
                      type="checkbox"
                      checked={categoryCheckboxes.includes(Category.value)}
                      value={Category.value}
                      onChange={(e)=>handleFilterCategory(e)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-b-2 border-stone-700 py-4">
            <h1 className="text-xl font-bold text-center mb-2">Brands</h1>
            <ul className="text-center w-max mx-auto space-y-2">
              {brandsArray && brandsArray.map((brand) => {
                return (
                  <li className="flex justify-between capitalize text-xl  font-sans ">
                    <label
                      htmlFor=""
                      className="pr-2">
                      {brand.label}
                    </label>
                    <input
                      type="checkbox"
                      checked={brandsCheckboxes.includes(brand.value)}
                      value={brand.value}
                      onChange={(e)=>handleFilterBrands(e)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
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
          {
            ProductArray && ProductArray.map((ProductDetails, index)=>{
              return (<Productcard ProductDetails={ProductDetails} />)
            })
          }
          <div className="col-span-2 lg:col-span-3 flex justify-end py-3 ">
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
