import styled from "styled-components";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <NavbarStyle>
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
`;

const BackButton = styled.div``;
