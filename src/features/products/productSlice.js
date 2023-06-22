import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  fetchBrands, fetchCategory, fetchProductById, fetchProducts } from './ProductsApi';
import { getTotalProductsPerPage } from '../../app/constant';

const queryObject = {
  category: "",
  brand: "",
  _sort: "",
  _order: "",
  _page: 1,
  _limit: getTotalProductsPerPage(),
  isupdated: false,
};

const initialState = {
  products: [], 
  brands: [], 
  category: [], 
  singleProductDetail: {},
  queryUrlObject: queryObject,
  totalFetchProducts: 0, 
  status: 'idle',
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProduct',
  async (queryObject) => {
    // console.log(queryObject);
    const {data, headers} = await fetchProducts(queryObject);
    console.log(headers["x-total-count"]);
    return {productData: data,totalFetchProducts: headers["x-total-count"]};
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const {data} = await fetchProductById(productId);
    return data;
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
    updateQueryUrl(state, action){
      const itemKey = Object.keys(action.payload);
      const itemValue = Object.values(action.payload);
      // console.log({itemKey, itemValue});
      state.queryUrlObject = {...state.queryUrlObject, [itemKey[0]]: itemValue[0], isupdated: true};
    },
    resetQueryUrl(state, action){
      state.queryUrlObject = action.payload;
    }
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
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.singleProductDetail = action.payload;
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

export const { updateQueryUrl } = productsSlice.actions;

export const selectProducts = (state)=>state.product.products;
export const selectSingleProduct = (state)=>state.product.singleProductDetail;
export const selectBrand = (state)=>state.product.brands;
export const selectTotalFetchProducts = (state)=>state.product.totalFetchProducts;
export const selectCategory = (state)=>state.product.category;
export const selectQueryUrl = (state)=>state.product.queryUrlObject;

export default productsSlice.reducer;