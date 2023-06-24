import axios from "axios";
import { getUserId } from "../../app/constant";

export function createOrder(orderObject) {
    return axios.post("http://localhost:8080/order", orderObject);
}
export function getAllOrderByUser() {
    return axios.get(`http://localhost:8080/order/${getUserId()}`);
}
export function updateOrder(updateOrderField, orderId) {
    return axios.patch(`http://localhost:8080/order/${orderId}`, updateOrderField);
}
export function removeOrder(orderId) {
    return axios.delete(`http://localhost:8080/order/${orderId}`);
}
