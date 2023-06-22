import axios from "axios";
import { getUserId } from "../../app/constant";

export function getCartItmes() {
    return axios.get(`http://localhost:8080/cart/${getUserId()}`)
}
export function addItem(cartItem) {
    return axios.post(`http://localhost:8080/cart/`, cartItem);
}
export function updateItem(updatecartItem, cartItemId) {
    return axios.patch(`http://localhost:8080/cart/${cartItemId}`, updatecartItem);
}
export function removeItem(cartItemId) {
    return axios.delete(`http://localhost:8080/cart/${cartItemId}`);
}


