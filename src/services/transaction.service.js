import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api"
const getAllTransaction = () => {
    return axios.get(API_URL + "/admin/get-all-transaction", { headers: authHeader() })
        .then((response) => {
            return response.data;
        })
};

const exportWithdrawRequest = () => {
    return axios.get(API_URL + "/admin/export-withdraw-request", { headers: authHeader() })
        .then((response) => {
            return response.data;
        })
};

const transactionService = {
    getAllTransaction,
    exportWithdrawRequest
};

export default transactionService;