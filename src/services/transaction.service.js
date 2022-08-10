import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1"
const getAllTransaction = () => {
    return axios.get(API_URL + "/admin/get-all-transaction")
    .then((response) => {
        return response.data;
    })
};

const transactionService = {
    getAllTransaction
};

export default transactionService;