import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";
const getAllCategories = () => {
  return axios.get(API_URL + "/categories").then((response) => {
    localStorage.setItem("categories", JSON.stringify(response.data));
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
      localStorage.setItem("subcategories",JSON.stringify(response.data));
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

const categoryService = {
  getAllCategories,
  addCategory,
  getSubCategories,
  addSubCategory
};

export default categoryService;
