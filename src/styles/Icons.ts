import styled from "styled-components";
import { BiArrowBack, BiLock, BiEnvelope } from "react-icons/bi";
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

const Lock = styled(BiLock)`
  color: #ff7bbd;
  font-size: 1.8rem;
`;

const Email = styled(BiEnvelope)`
  color: #ff7bbd;
  font-size: 1.8rem;
`;

export default { Bars, Github, Back, Lock, Email };
