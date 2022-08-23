import { useContext } from "react";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../hooks/Context/SidebarContext";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const navigate = useNavigate();

  return (
    <NavbarStyle>
      <IconsBars size={36} onClick={() => setIsOpen(!isOpen)} />
      <Flex>
        <Brand
          src="https://hub.driven.com.br/algorithms/4de17e59e871b2af7c42.svg"
          alt=""
        />
      </Flex>
    </NavbarStyle>
  );
};

export default Navbar;

const IconsBars = styled(GoThreeBars)`
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Brand = styled.img`
  width: 150px;
`;

const NavbarStyle = styled.nav`
  width: 100%;
  position: fixed;
  height: 85px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  background-color: #45455c;
  display: flex;
  align-items: center;
  justify-content: center;
`;
