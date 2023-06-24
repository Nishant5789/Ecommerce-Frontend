import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/products/productSlice';
import cartSlice from '../features/cart/cartSlice';
import userSlice from '../features/user/userSlice';
import orderSlice from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    user: userSlice,
    user: userSlice,
    order: orderSlice,
  },
});