import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, selectTotalFetchProducts } from '../productSlice';
import { getTotalProductsPerPage } from '../../../app/constant';

const ProductPagination = ({currentPage, setCurrentPage}) => {

    const dispatch = useDispatch();
    const totalProducts = useSelector(selectTotalFetchProducts);
    const totalProductsPerPage = getTotalProductsPerPage();
    const totalPages = Math.ceil(totalProducts/totalProductsPerPage);
    const paginationArray = Array.from({ length: totalPages }, (_, index) => index+1);

    const handlePagination =(PageNO, totalProductsPerPage)=>{
        if(PageNO>=1 && PageNO<=totalPages){
          console.log(PageNO, totalProductsPerPage);
          dispatch(fetchProductsAsync({_page:PageNO, _limit:totalProductsPerPage}));
          setCurrentPage(PageNO);
        }
    }
    
  return (
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
          <li onClick={()=>handlePagination(PageNO, totalProductsPerPage)} key={index} className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-3 px-5 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
  )
}

export default ProductPagination
