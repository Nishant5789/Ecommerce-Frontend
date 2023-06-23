import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addUserAddress, getUserAddresses } from './userApi';

const initialState = {
  Addresses: [], 
  status: 'idle',
};

export const fetchUserAddressAsync = createAsyncThunk(
  'cart/fetchUserAddressesAsync',
  async () => {
    const {data} = await getUserAddresses();
    return data;
  }
);
export const addUserAddressAsync = createAsyncThunk(
  'cart/addUserAddressAsync',
  async (addressObject) => {
    const {data} = await addUserAddress(addressObject);
    return data;
  }
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddressAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserAddressAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Addresses = action.payload;
      })
      .addCase(addUserAddressAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUserAddressAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Addresses.push(action.payload);
      })
  },
});

// export const {  } = userSlice.actions;

export const selectUserAddresses = (state)=>state.user.Addresses;

export default userSlice.reducer;