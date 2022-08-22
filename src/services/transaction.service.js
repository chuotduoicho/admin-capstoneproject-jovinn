import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api";
const API_URL = process.env.REACT_APP_API_URL + "/api";
const getAllTransaction = () => {
  return axios
    .get(API_URL + "/admin/get-all-transaction", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const getListTransaction = () => {
  return axios
    .get(API_URL + "/admin/list-withdraw-request?year=2022&month=8", {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};
const exportWithdrawRequest = () => {
  return axios
    .get(API_URL + "/admin/export-withdraw-request", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const transactionService = {
  getAllTransaction,
  exportWithdrawRequest,
  getListTransaction,
};

export default transactionService;
