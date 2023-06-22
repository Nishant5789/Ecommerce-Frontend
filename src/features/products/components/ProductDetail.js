/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchProductByIdAsync, selectSingleProduct } from '../productSlice'
import Spinner from '../../navbar & spinner/Spinner'


const ProductDetail = () => {
    const {productId} = useParams();
    const [isProductFetch, setIsProductFetch] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const dispatch = useDispatch();
    const ProductDetails = useSelector(selectSingleProduct);

    useEffect(()=>{ 
        if(productId){
          // console.log("called");
          dispatch(fetchProductByIdAsync(productId));
          setTimeout(() => {
            setIsProductFetch(true); 
          }, 100);
        }
    },[productId])

  return (
    <div className="py-6">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
   {
    isProductFetch ?  renderProductDetails(ProductDetails,selectedImage, setSelectedImage )
      : <Spinner/>
   }
  </div>
</div>
  )
}

const renderProductDetails = (ProductDetails, selectedImage, setSelectedImage)=>{
  
  const {brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title} = ProductDetails;
  
  const handleSelectedImage = (selectNumber)=>{
    console.log(selectNumber);
    if(selectNumber)
      setSelectedImage(selectNumber);
  }
  return (
    <div className="flex flex-col md:flex-row -mx-4">
  <div className="md:flex-1 px-4 ">
    <div className="h-64 md:h-96 rounded-lg bg-gray-400 mb-2 border-stone-800 flex items-center justify-center">
      <img src={`${images[selectedImage]}`} className='h-64 md:h-96' alt="" />
    </div>
   <ul className='flex gap-x-4 bg-gray-400 p-4'>
   {
    images.slice(1).map((image, index) =>{
      return ( <li className='hover:shadow-2xl  opacity-80 transition duration-300 ease-in-out hover:opacity-100 shadow-black'>
    <img onClick={()=>handleSelectedImage(index+1)} src={image} className='active:animate-ping duration-300  rounded-lg object-cover h-36' alt="" />
    </li>)
    })
   }
   </ul>
  </div>
  <div className="md:flex-1 px-4">
    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
      {title}
    </h2>
    <p className="text-gray-500 text-sm">
      By{" "}
      <Link to="#" className="text-indigo-600 hover:underline">
        {brand} Company
      </Link>
    </p>
    <div className="flex items-center space-x-4 my-4">
      <div>
        <div className="rounded-lg bg-gray-100 flex py-2 px-3">
          <span className="text-indigo-400 mr-1 mt-1">$</span>
          <span className="font-bold text-indigo-600 text-3xl">25</span>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-green-500 text-xl font-semibold">Save {discountPercentage}%</p>
        <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
      </div>
    </div>
    <p className="text-gray-500">
    {description}
    </p>
    <div className="flex py-4 space-x-4">
      <div className="relative">
        <select className="cursor-pointer rounded-xl border text-center border-gray-200 w-12 h-12">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <Link to="/cart">
      <button
        type="button"
        className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
      >
        Add to Cart
      </button>
      </Link>
    </div>
  </div>
</div>)
}

export default ProductDetail
