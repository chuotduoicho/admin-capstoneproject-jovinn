export default function authHeader() {
    const admin = JSON.parse(localStorage.getItem("admin"));
  
    if (admin && admin.accessToken) {
      return { Authorization: "Bearer " + admin.accessToken }; 
    } else {
      return {};
    }
  }
  