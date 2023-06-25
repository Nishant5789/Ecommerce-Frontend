import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTotalProductsPerPage } from '../../app/constant';
import { addItem, getCartItmes, removeAllItem, removeItem, updateItem } from './cartApi';

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
export const updateCartItemsAsync = createAsyncThunk(
  'cart/updatecartitems',
  async (updateCartItem) => {
    // console.log(cartItem);
    const {quantity, cartItemId} = updateCartItem;
    // console.log({quantity, cartItemId});
    const {data} = await updateItem({quantity}, cartItemId);
    return data;
  }
);
export const removeCartItemsAsync = createAsyncThunk(
  'cart/removecartitems',
  async (cartItemId) => {
    await removeItem(cartItemId);
    return cartItemId;
  }
);
export const removeAllItemFromCartAsync = createAsyncThunk(
  'cart/removeAllItemFromCartAsync',
  async () => {
    await removeAllItem();
    return {};
  }
);

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // removeAllItemFromCart(state) {
    //     state.items = [];
    // }
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
      .addCase(updateCartItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item)=>item.id===action.payload.id);
        state.items[index].quantity = action.payload.quantity;
        // state.items.splice(index, 1, updateCartItem);
      })
      .addCase(removeCartItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeCartItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item)=>item.id===action.payload);
        state.items.splice(index, 1);
      })
      .addCase(removeAllItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeAllItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [];
      })
  },
});

// export const { removeAllItemFromCart } = cartSlice.actions;

export const selectCartItems = (state)=>state.cart.items;
export const selectCartMsg = (state)=>state.cart.msg;


export default cartSlice.reducer;