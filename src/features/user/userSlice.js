import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addUserAddress, getUserAddresses, getUserData } from './userApi';

const initialState = {
  Addresses: [], 
  UserData:{},
  status: 'idle',
};
export const fetchUserDataAsync = createAsyncThunk(
  'user/fetchUserDataAsync',
  async (userId) => {
    const {data} = await getUserData(userId);
    return data;
  }
);
export const fetchUserAddressAsync = createAsyncThunk(
  'user/fetchUserAddressesAsync',
  async (userId) => {
    const {data} = await getUserAddresses(userId);
    return data;
  }
);
export const addUserAddressAsync = createAsyncThunk(
  'user/addUserAddressAsync',
  async ({addressObject, userId}) => {
    const {data} = await addUserAddress(addressObject, userId);
    return data;
  }
);

export const updateUserAddressAsync = createAsyncThunk(
  'user/updateUserAddressAsync',
  async ({updatedata, addressId}) => {
    const {data} = await addUserAddress(updatedata, addressId);
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
      .addCase(fetchUserDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.UserData = action.payload;
      })
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
      .addCase(updateUserAddressAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAddressAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.Addresses.findIndex((address)=>address.id === action.payload.id);
        state.Addresses[index] = action.payload.updatedaddress;
      })
  },
});

// export const {  } = userSlice.actions;

export const selectUserAddresses = (state)=>state.user.Addresses;
export const selectUserData = (state)=>state.user.UserData;

export default userSlice.reducer;