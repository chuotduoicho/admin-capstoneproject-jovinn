import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const login = (username, password) => {
    return axios
      .post(API_URL + "/signin", {
        usernameOrEmail: username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
  };

  const authService = {
    login,
    logout
  }
  export default authService;