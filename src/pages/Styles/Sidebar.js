import styled from "styled-components";

export const Sidebar = styled.div`
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

export const SidebarHeader = styled.div`
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SidebarBackground = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #00000050;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
