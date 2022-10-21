import { useCallback, useEffect, useLayoutEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { verifyToken } from "../services/api";

interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  const validToken = useCallback(async () => {
    try {
      await verifyToken(token);
    } catch (error) {
      return navigate("/");
    }
  }, [token]);

  useEffect(() => {
    validToken();
  }, [validToken]);

  return <>{children}</>;
};

export default AuthRoute;
