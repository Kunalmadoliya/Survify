import axios from "axios";

const API_URL = "http://localhost:7001/api/auth"; // ✅ correct port

const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data);
  const token = res.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return res.data;
};

const signup = async (data) => {
  const res = await axios.post(`${API_URL}/signup`, data);
  return res.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await axios.get("http://localhost:7001/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export default { login, signup, logout, getCurrentUser };
