import axios from 'axios'

export function fetchProducts(page, limit) {
     return axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
}
export function fetchCategory() {
     return axios.get('http://localhost:8080/category');
}
export function fetchBrands() {
     return axios.get('http://localhost:8080/brands');
}