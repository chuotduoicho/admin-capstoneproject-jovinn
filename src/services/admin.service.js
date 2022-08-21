import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";
const getTotalServices = () => {
  return axios
    .get(API_URL + "/admin/get-total-service", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const getTotalRevenue = () => {
  return axios
    .get(API_URL + "/admin/get-total-revenue", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const getRevenueByMonth = () => {
  return axios
    .get(API_URL + "/admin/count-total-revenue-by-month", {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const getCountData = () => {
  return axios
    .get(API_URL + "/admin/get-all-count-data", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const getAllAdmins = () => {
  return axios
    .get(API_URL + "/admin/get-list-admin", { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
const getAdminById = (adminId) => {
  return axios
    .get(API_URL + "/admin/get-admin-by-id/" + adminId, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const AdminService = {
  getAdminById,
  getAllAdmins,
  getRevenueByMonth,
  getTotalRevenue,
  getTotalServices,
  getCountData,
};
export default AdminService;
