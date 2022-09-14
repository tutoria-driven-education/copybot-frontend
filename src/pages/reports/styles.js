import styled from "styled-components";

const Loader = styled.div`
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #000000b0;
`;

const Timer = styled.div`
  position: absolute;
  top: 10px;
  left: 32px;
`;

export { Loader, Timer };
