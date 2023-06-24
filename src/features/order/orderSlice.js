import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, getAllOrderByUser, removeOrder, updateOrder } from './orderAPI';

const initialState = {
    orders: [],
    status: 'idle',
    currentOrder: null,
    totalOrders: 0
};

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (orderObject) => {
    const {data} = createOrder(orderObject);
    return data;
  }
);
export const fetchAllOrdersAsync = createAsyncThunk(
  'order/fetchAllOrdersAsync',
  async (userId) => {
    const {data} = getAllOrderByUser(userId);
    return data;
  }
);
export const updateOrdersAsync = createAsyncThunk(
  'order/fetchAllOrdersAsync',
  async (updateOrderField, orderId) => {
    const {data} = updateOrder(updateOrderField, orderId);
    return data;
  }
);
export const removeOrdersAsync = createAsyncThunk(
  'order/removeOrdersAsync',
  async (orderId) => {
    await removeOrder(orderId);
    return orderId;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrder = action.payload;
        state.orders.push(action.payload);
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrder = null;
        state.orders = action.payload;
      })
      .addCase(updateOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrder = null;
        const index = state.orders.findIndex((order)=>order.id===action.payload.id);
        state.orders.splice(index, 1, action.payload);
      })
      .addCase(removeOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrder = null;
        const index = state.orders.findIndex((order)=>order.id===action.payload.id);
        state.orders.splice(index, 1);
      })
  },
});

// export const {  } = cartSlice.actions;

export const selectOrders = (state)=>state.order.orders;
export const selectCurrOrder = (state)=>state.order.currentOrder;

export default orderSlice.reducer;