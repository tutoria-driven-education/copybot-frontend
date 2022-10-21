import { useState } from "react";
import { verifyToken } from "../services/api";

const useAuth = () => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");

    if (token) {
      return JSON.parse(token);
    }

    return "";
  });

  return { token };
};

export default useAuth;
