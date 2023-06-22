import axios from 'axios'

export function fetchProducts(queryObject) {
     const baseUrl = "http://localhost:8080/products?"
     
     let queryUrl = Object.keys(queryObject)
     .map((key) => {
       if (queryObject[key]) {
         return `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
       }
       return null;
     })
     .filter((param) => param !== null)
     .join("&");

     // console.log(queryUrl);
     console.log(baseUrl+queryUrl);
     return axios.get(baseUrl+queryUrl);
}
export function fetchProductById(productId) {
     return axios.get(`http://localhost:8080/products/${productId}`);
}
export function fetchCategory() {
     return axios.get('http://localhost:8080/category');
}
export function fetchBrands() {
     return axios.get('http://localhost:8080/brands');
}