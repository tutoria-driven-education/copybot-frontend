import styled from "styled-components";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
  IoAlertCircleSharp,
} from "react-icons/io5";

const Anchor = styled.a`
  color: #fff;
  margin: 6px 0;
  display: flex;
  padding: 12px 6px;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  justify-content: space-between;

  &:hover {
    background-color: #ffffff50;
  }
`;

const IconSuccess = styled(IoCheckmarkCircleSharp)`
  color: #5fff59;
  font-size: 1.4rem;
`;

const IconWarning = styled(IoAlertCircleSharp)`
  color: #ff5959;
  font-size: 1.4rem;
`;

export { Anchor, IconSuccess, IconWarning };
