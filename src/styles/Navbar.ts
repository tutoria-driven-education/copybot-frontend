import styled from "styled-components";

const Container = styled.nav`
  top: 0;
  z-index: 1;
  width: 100%;
  position: fixed;
  padding: 28px;
  background-color: #45455c;
`;

const Flex = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { Container, Flex };
