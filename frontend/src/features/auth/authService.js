import axios from "axios";

// const API_URL = "https://kevin-tickets-backend.herokuapp.com/api";
const API_URL = "http://localhost:8000/api";

const register = async (userData) => {
  const response = await axios.post(API_URL + "/users/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "/users/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
