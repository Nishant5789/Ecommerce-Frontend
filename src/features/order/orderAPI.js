import axios from "axios";
import { getUserId } from "../../app/constant";

export function createOrder(orderObject) {
    return axios.post("/order", orderObject);
}
export function getAllOrderByUser() {
    return axios.get(`/order/${getUserId()}`);
}
export function updateOrder(updateOrderField, orderId) {
    return axios.patch(`/order/${orderId}`, updateOrderField);
}
export function removeOrder(orderId) {
    return axios.delete(`/order/${orderId}`);
}
