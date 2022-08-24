import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";

const Navigation = styled.nav`
  top: 0;
  z-index: 1;
  width: 100%;
  position: fixed;
  padding: 32px 24px;
  background-color: #45455c;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Bars = styled(GoThreeBars)`
  left: 0px;
  color: #fff;
  cursor: pointer;
  font-size: 2.2rem;
  position: absolute;
`;

export { Navigation, Bars, Center };
