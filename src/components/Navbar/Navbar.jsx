import styled from "styled-components";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <NavbarStyle>
      <BackButton>
        {pathname === "/" ? (
          <Brand
            src="https://hub.driven.com.br/algorithms/4de17e59e871b2af7c42.svg"
            alt=""
          />
        ) : (
          <IconBack onClick={() => navigate(-1, { replace: true })} />
        )}
      </BackButton>
    </NavbarStyle>
  );
};

export default Navbar;

const Brand = styled.img`
  width: 150px;
`;

const NavbarStyle = styled.nav`
  height: 85px;
  display: flex;
  padding: 0 24px;
  align-items: center;
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

const IconBack = styled(IoArrowBackCircleSharp)`
  cursor: pointer;
  font-size: 2rem;
`;
