import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1";
const getAllCategories = () => {
  return axios.get(API_URL + "/categories").then((response) => {
    return response.data;
  });
};

const addCategory = (category) => {
  return axios
    .post(API_URL + "/category", category)
    .then((response) => {
      return response.data;
    });
}

const getSubCategories = (catId) => {
  return axios
    .get(API_URL + "/subCategory/findByCategory/" + catId)
    .then((response) => {
      return response.data;
    });
};

const addSubCategory = (subCategory) => {
  return axios
    .post(API_URL + "/subCategory", subCategory)
    .then((response) => {
      return response.data;
    });
};

const getSkills = (subCatId) => {
  return axios
    .get(API_URL + "/skill/meta-data-list/" + subCatId, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const addSkill = (skill) => {
  return axios
    .post(API_URL + "/skill/meta-data", skill)
    .then((response) => {
      return response.data;
    });
}

const categoryService = {
  getAllCategories,
  addCategory,
  getSubCategories,
  addSubCategory,
  getSkills,
  addSkill
};

export default categoryService;
