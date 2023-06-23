import axios from "axios";
import { getUserId } from "../../app/constant";

export function getUserAddresses() {
    return axios.get(`http://localhost:8080/address/${getUserId()}`);
}
export function addUserAddress(addressObject) {
    return axios.post(`http://localhost:8080/address/${getUserId()}`, addressObject);
}
export function removeUserAddress(addressId) {
    return axios.delete(`http://localhost:8080/address/${addressId}`);
}
