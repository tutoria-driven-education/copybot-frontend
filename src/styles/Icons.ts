import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { GoThreeBars, GoOctoface } from "react-icons/go";

const Bars = styled(GoThreeBars)`
  left: 0;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
`;

const Github = styled(GoOctoface)`
  color: #fff;
  font-size: 1.4rem;
`;

const Back = styled(BiArrowBack)`
  left: 0;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
`;

export default { Bars, Github, Back };
