import axios from "axios";

const API_URL = "http://localhost:8080/api/v1"
const getTotalServices = () => {
    return axios.get(API_URL + "/admin/get-total-service").then((response) => {
        localStorage.setItem("totalServices", JSON.stringify(response.data));
        return response.data;
    });
};
const getTotalRevenue = () => {
    return axios.get(API_URL + "/admin/get-total-revenue").then((response) => {
        localStorage.setItem("totalRevenue", JSON.stringify(response.data));
        return response.data;
    });
};

const getRevenueByMonth = () => {
    return axios.get(API_URL + "/admin/count-total-revenue-by-month").then((response) => {
        localStorage.setItem("revenueByMonth", JSON.stringify(response.data));
        return response.data;
    });
}

const getTotalUsers = () => {
    return axios.get(API_URL + "/admin/count-total-user").then((response) => {
        localStorage.setItem("totalUsers", JSON.stringify(response.data));
        return response.data;
    });
};

const getAllAdmins = () => {
    return axios.get(API_URL + "/admin/get-list-admin").then((response) => {
        return response.data;
    });
};
const getAdminById = (adminId) => {
    return axios.get(API_URL + "/admin/get-admin-by-id/" + adminId).then((response) => {
        return response.data;
    });
};

const AdminService = {
    getAdminById,
    getAllAdmins,
    getRevenueByMonth,
    getTotalRevenue,
    getTotalServices,
    getTotalUsers
}
export default AdminService;