import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllOrder } from './adminApi';

const initialState = {
    allOrders: [],
    status: 'idle',
    // totalOrders: 0
};


export const fetchAllOrdersAsync = createAsyncThunk(
  'admin/fetchAllOrdersAsync',
  async () => {
    const {data} = await getAllOrder();
    return data;
  }
);

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allOrders = action.payload;
      })
  },
});

// export const {  } = cartSlice.actions;

export const selectAllOrders = (state)=>state.admin.allOrders;

export default adminSlice.reducer;