import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";
const getAllUsers = () => {
    return axios.get(API_URL + "/admin/get-all-user", {headers: authHeader()})
        .then((response) => {
            return response.data;
        });
};

const banOrUnbanUser = (userId) => {
    return axios.put(API_URL + "/admin/ban-or-unban-user/"+ userId, {headers: authHeader()})
        .then((response) => {
            localStorage.setItem("users",JSON.stringify(response.data));
            return response.data;
        });
};

const userService = {
    getAllUsers,
    banOrUnbanUser
};

export default userService;
