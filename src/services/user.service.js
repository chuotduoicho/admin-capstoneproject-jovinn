import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api";
const API_URL = process.env.REACT_APP_API_URL + "/api";
const getAllUsers = () => {
  return axios
    .get(API_URL + "/admin/get-all-user", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const getUserById = (id) => {
  return axios
    .get(API_URL + "/admin/get-user-by-id/" + id, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const banOrUnbanUser = (userId) => {
  return axios
    .put(API_URL + "/admin/ban-or-unban-user/" + userId, null, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};
const getTransactions = (userId) => {
  return axios
    .get(API_URL + "/admin/get-all-transaction-by-userId/" + userId, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const userService = {
  getAllUsers,
  banOrUnbanUser,
  getUserById,
  getTransactions,
};

export default userService;
