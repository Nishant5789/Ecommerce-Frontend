import axios from "axios";

export function getUserData() {
    return axios.get(`http://localhost:8080/user/getuserdata/`);
}

export function getUserAddresses() {
    return axios.get(`http://localhost:8080/address`);
}
export function addUserAddress(addressObject) {
    return axios.post(`http://localhost:8080/address`, addressObject);
}
export function updateUserAddress(updatedata, addressId) {
    return axios.put(`http://localhost:8080/address/${addressId}`, updatedata);
}
export function removeUserAddress(addressId) {
    return axios.delete(`http://localhost:8080/address/${addressId}`);
}
