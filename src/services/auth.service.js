import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const login = (username, password) => {
    return axios
      .post(API_URL + "/admin-sign-in", {
        adminAccount: username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("admin", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("admin");
    //localStorage.removeItem("currentUser");
  };

  const authService = {
    login,
    logout
  }
  export default authService;