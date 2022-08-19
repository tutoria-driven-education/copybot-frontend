import styled from "styled-components";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import logoDriven from "/public/logoDriven.png";

const Navbar = () => {
  return (
    <NavbarStyle>
      <img src={logoDriven} alt="Logo Driven" />
      <BackButton>
        <IoArrowBackCircleSharp size={30} />
      </BackButton>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.nav`
  padding: 24px;
  background-color: #45455c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.div`
  position: absolute;
  top: 23px;
  left: 30px;
  width: 30px;
  height: 25px;
`;

