import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../../hooks/context/SidebarContext";
import { Bars, Center, Navigation } from "./styles";

const Navbar = () => {
  let { pathname } = useLocation();
  const { toggleSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      <Navigation>
        <Center>
          {pathname === "/" ? <></> : <Bars onClick={toggleSidebarOpen} />}
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
