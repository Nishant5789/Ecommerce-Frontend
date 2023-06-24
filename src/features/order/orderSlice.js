import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, getAllOrderByUser, removeOrder, updateOrder } from './orderAPI';

const initialState = {
    orders: [],
    status: 'idle',
    currentOrderId: null,
    totalOrders: 0
};

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (orderObject) => {
    const {data} = await createOrder(orderObject);
    return data;
  }
);
export const fetchAllOrdersAsync = createAsyncThunk(
  'order/fetchAllOrdersAsync',
  async (userId) => {
    const {data} = await getAllOrderByUser(userId);
    return data;
  }
);
export const updateOrdersAsync = createAsyncThunk(
  'order/updateOrdersAsync',
  async (updateOrderField, orderId) => {
    const {data} = await  updateOrder(updateOrderField, orderId);
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
        state.currentOrderId = action.payload.id;
        state.orders.push(action.payload);
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrderId = null;
        state.orders = action.payload;
      })
      .addCase(updateOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrderId = null;
        const index = state.orders.findIndex((order)=>order.id===action.payload.id);
        state.orders.splice(index, 1, action.payload);
      })
      .addCase(removeOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOrderId = null;
        const index = state.orders.findIndex((order)=>order.id===action.payload.id);
        state.orders.splice(index, 1);
      })
  },
});

// export const {  } = cartSlice.actions;

export const selectOrders = (state)=>state.order.orders;
export const selectCurrOrderId = (state)=>state.order.currentOrderId;

export default orderSlice.reducer;