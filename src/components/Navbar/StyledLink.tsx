import { useLocation } from "react-router-dom";
import Navbar from "../../styles/Navbar";

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function StyledLink({ to, children }: LinkProps) {
  const { pathname } = useLocation();

  return (
    <Navbar.StyledLink active={pathname === to ? "true" : "false"} to={to}>
      {children}
    </Navbar.StyledLink>
  );
}
