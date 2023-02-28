import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "../styles/Navbar";
import StyledLink from "./Navbar/StyledLink";

export default function NavbarComponent() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbar.Container>
        <Navbar.Actions>
          <Link to="/">
            <Navbar.Brand
              src="https://uploads-ssl.webflow.com/62235d098ddf9185c2d74422/62235d7c6c3db99f41e74ca4_logo.svg"
              alt="driven education"
            />
          </Link>
          <Navbar.Nav>
            <Navbar.Item>
              <StyledLink to="/">Inicio</StyledLink>
            </Navbar.Item>
            <Navbar.Item>
              <StyledLink to="/history">Histórico</StyledLink>
            </Navbar.Item>
          </Navbar.Nav>
        </Navbar.Actions>
        <Navbar.Logout onClick={() => logout()}>
          <BiExit />
        </Navbar.Logout>
      </Navbar.Container>
    </>
  );
}
