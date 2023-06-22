import axios from "axios";

export function getCartItmes(userId) {
    return axios.get(`http://localhost:8080/cart/${userId}/`)
}
export function addItem(cartItem) {
    return axios.post(`http://localhost:8080/cart/`, cartItem);
}

