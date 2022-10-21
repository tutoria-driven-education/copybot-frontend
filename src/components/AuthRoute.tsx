import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { verifyToken } from "../services/api";

interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
  const { token } = useAuth();

  const verifyValidToken = async () => {
    const response = await verifyToken(token);

    if (response.status !== 200) {
      return false;
    }
    return true;
  };

  const isValidToken = verifyValidToken();

  if (!isValidToken) {
    return <Navigate to="/" />;
  }

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AuthRoute;
