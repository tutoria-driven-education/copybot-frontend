import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav`
  width: 100%;
  z-index: 2;
  padding: 16px;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #45455c;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Brand = styled.img`
  width: 120px;
`;

const Nav = styled.ul`
  display: flex;
  padding: 12px;
`;

const Item = styled.li`
  padding: 0 4px;
`;

type LinkProps = {
  active?: string;
};

const StyledLink = styled(Link)<LinkProps>`
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s;
  text-decoration: none;
  color: ${({ active }) => (active === "true" ? "#ffffff" : "#cccccc")};
  background-color: ${({ active }) =>
    active === "true" ? "#252538" : "transparent"};

  &:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #252538;
  }
`;

const Logout = styled.button`
  color: #ffffff;
  border: none;
  display: flex;
  font-size: 2rem;
  align-items: center;
  transition: all 0.2s;
  background-color: transparent;

  &:hover {
    color: #cccccc;
  }
`;

export default {
  Container,
  Actions,
  Logout,
  ProfileImage,
  Nav,
  Item,
  Brand,
  StyledLink,
};
