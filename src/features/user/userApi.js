import axios from "axios";

export function getUserData(userId) {
    return axios.get(`http://localhost:8080/user/getuserdata/${userId}`);
}

export function getUserAddresses(userId) {
    return axios.get(`http://localhost:8080/address/${userId}`);
}
export function addUserAddress(addressObject, userId) {
    return axios.post(`http://localhost:8080/address/${userId}`, addressObject);
}
export function updateUserAddress(updatedata, addressId) {
    return axios.put(`http://localhost:8080/address/${addressId}`, updatedata);
}
export function removeUserAddress(addressId) {
    return axios.delete(`http://localhost:8080/address/${addressId}`);
}
