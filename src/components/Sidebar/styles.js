import styled from "styled-components";

const SideNavigation = styled.div`
  top: 0;
  z-index: 3;
  width: 300px;
  height: 100%;
  padding: 12px;
  position: fixed;
  transition: 0.4s;
  background-color: #45455c;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
`;

const SideHeader = styled.div`
  display: flex;
  margin: 0 0 24px 0;
  align-items: center;
  justify-content: space-between;
`;

const SideBackground = styled.div`
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000000b0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Anchor = styled.a`
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

const Icon = styled.div`
  cursor: pointer;
  font-size: 1.6rem;
`;

export { SideNavigation, SideHeader, SideBackground, Icon, Anchor };
