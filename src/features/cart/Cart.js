/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../navbar & spinner/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { fetchCartItemsAsync, selectCartItems } from "./cartSlice";
import Subtotal from "./SubtotalMenu";
import SubtotalMenu from "./SubtotalMenu";
import { selectLoggedInUser } from "../auth/authSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemArray = useSelector(selectCartItems);
  const loggedUser = useSelector(selectLoggedInUser);
  const [subTotal, setSubtotal] = useState(0);
  // console.log(cartItemArray);

  useEffect(() => {
    dispatch(fetchCartItemsAsync(loggedUser.id));
  }, []);

  useEffect(() => {
    if (cartItemArray.length > 0) {
      const finalSubTotal = cartItemArray.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity, 0 );
      setSubtotal(finalSubTotal);
    }
  }, [cartItemArray]);
  

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-100 pt-3">
        <h1 className="mb-6 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-6xl justify-center  px-6 md:flex md:space-x-6 xl:px-0">
          <CartItems cartItemArray={cartItemArray} />
          <SubtotalMenu subTotal={subTotal} />
        </div>
      </div>
    </>
  );
};

export default Cart;
