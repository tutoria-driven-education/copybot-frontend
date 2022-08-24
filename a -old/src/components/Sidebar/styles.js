import styled from "styled-components";
import { GoX } from "react-icons/go";
import { IoHome } from "react-icons/io5";

const SidebarStyle = styled.div`
  z-index: 4;
  padding: 12px;
  width: 300px;
  height: 100%;
  position: fixed;
  transition: all 0.4s;
  background-color: #45455c;
  left: -300px;

  & {
    left: ${(props) => (props.isOpen ? "0" : null)};
  }
`;

const SidebarHeader = styled.div`
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarBackground = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #00000050;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Href = styled.a`
  color: #fff;
  display: block;
  padding: 12px 0;
  margin: 6px 0;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: #ffffff50;
  }
`;

const IconBack = styled(IoHome)`
  cursor: pointer;
  font-size: 1.4rem;
`;

const IconClose = styled(GoX)`
  cursor: pointer;
  font-size: 1.6rem;
`;

export {
  Href,
  IconBack,
  IconClose,
  SidebarBackground,
  SidebarStyle,
  SidebarHeader,
};
