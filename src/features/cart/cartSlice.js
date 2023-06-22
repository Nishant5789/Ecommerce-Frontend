import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTotalProductsPerPage } from '../../app/constant';
import { addItem, getCartItmes } from './cartApi';

const initialState = {
  items: [], 
  status: 'idle',
  msg: "",
};

export const fetchCartItemsAsync = createAsyncThunk(
  'cart/fetchcartitems',
  async (userId) => {
    const {data} = await getCartItmes(userId);
    return data;
  }
);
export const addCartItemsAsync = createAsyncThunk(
  'cart/addcartitems',
  async (cartItem) => {
    // console.log(cartItem);
    const {data} = await addItem(cartItem);
    return data;
  }
);

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // updateQueryUrl(state, action){
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
        state.msg =  "";
      })
      .addCase(addCartItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCartItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        if(action.payload["msg"]){
            state.msg = action.payload["msg"];
        }else{
            state.items.push(action.payload);
            state.msg =  "Product successfully added";
        }
      })
  },
});

// export const {  } = cartSlice.actions;

export const selectCartItems = (state)=>state.cart.items;
export const selectCartMsg = (state)=>state.cart.msg;


export default cartSlice.reducer;