import axios from "axios";

export function getAllOrder() {
    return axios.get('http://localhost:8080/order');
}