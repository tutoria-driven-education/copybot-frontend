import { Navigate } from "react-router-dom";

import Navbar from "./Navbar";

type PrivateRouteProps = {
  component: JSX.Element;
};

export default function PrivateRoute({ component }: PrivateRouteProps) {
  const auth = JSON.parse(localStorage.getItem("token") as string);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar /> {component}
    </>
  );
}
