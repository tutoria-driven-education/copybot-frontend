import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarContext } from "../../hooks/context/SidebarContext";
import { Bars, Center, Navigation, Back } from "./styles";

const Navbar = () => {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const { toggleSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      <Navigation>
        <Center>
          {pathname === "/" || pathname === "/compare" ? <></> : <Bars onClick={toggleSidebarOpen} />}
          {pathname === "/compare" ? <Back onClick={() => navigate(-1)} /> : <></>}
          <img
            src="https://hub.driven.com.br/algorithms/4de17e59e871b2af7c42.svg"
            alt=""
          />
        </Center>
      </Navigation>
    </>
  );
};

export default Navbar;
