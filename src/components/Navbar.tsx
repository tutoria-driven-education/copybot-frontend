import { useLocation, useNavigate } from "react-router-dom";

import Icons from "../styles/Icons";
import Navbar from "../styles/Navbar";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <Navbar.Container>
        <Navbar.Flex>
          {pathname === "/result" && (
            <Icons.Back onClick={() => navigate("/home")} />
          )}
          <img
            src="https://hub.driven.com.br/algorithms/4de17e59e871b2af7c42.svg"
            alt=""
          />
        </Navbar.Flex>
      </Navbar.Container>
    </>
  );
};

export default NavbarComponent;
