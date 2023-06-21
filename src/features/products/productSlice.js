import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  fetchBrands, fetchCategory, fetchProducts } from './ProductsApi';

const initialState = {
  products: [], 
  brands: [], 
  category: [], 
  totalFetchProducts: 0, 
  status: 'idle',
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProduct',
  async (queryObject) => {
    console.log(queryObject);
    const {data, headers} = await fetchProducts(queryObject);
    console.log(headers["x-total-count"]);
    return {productData: data,totalFetchProducts: headers["x-total-count"]};
  }
);
export const fetchCategoryAsync = createAsyncThunk(
  'products/fetchCategory',
  async () => {
    const {data} = await fetchCategory();
    // console.log("after api called" ,data);
    return data;
  }
);
export const fetchBrandAsync = createAsyncThunk(
  'products/fetchBrands',
  async () => {
    const {data} = await fetchBrands();
    // console.log("after api called" ,data);
    return data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // console.log(action.payload);
        state.products = action.payload.productData;
        state.totalFetchProducts = action.payload.totalFetchProducts;
      })
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.category = action.payload;
      })
      .addCase(fetchBrandAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      });
  },
});

// export const { } = productsSlice.actions;

export const selectProducts = (state)=>state.product.products;
export const selectBrand = (state)=>state.product.brands;
export const selectTotalFetchProducts = (state)=>state.product.totalFetchProducts;
export const selectCategory = (state)=>state.product.category;

export default productsSlice.reducer;