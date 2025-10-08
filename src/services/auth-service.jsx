import api from "./api";

const authService = {
  login: async (credentials) => {
    return api.post("/auth/login", credentials);
  },

  register: async (userData) => {
    return api.post("/auth/register", userData);
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default authService;
