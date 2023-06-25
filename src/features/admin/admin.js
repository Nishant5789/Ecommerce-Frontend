import React from 'react'
import { Route, Routes } from 'react-router'
import Order from './components/Order';
import ProductLIst from './components/ProductLIst';
import Navbar from './components/Navbar';

const admin = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route>
        {/* <Route index element={<Home/>}/> */}
        <Route index  element={<ProductLIst />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes></>
  )
}

export default admin
