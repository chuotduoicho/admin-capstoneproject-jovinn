import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api"
const getAllTransaction = () => {
    return axios.get(API_URL + "/admin/get-all-transaction", { headers: authHeader() })
        .then((response) => {
            localStorage.setItem("transactions", JSON.stringify(response.data));
            return response.data;
        })
};

const transactionService = {
    getAllTransaction
};

export default transactionService;