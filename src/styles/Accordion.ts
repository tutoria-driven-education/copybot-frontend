import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 90px 36px 0 36px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 6px;
  background-color: #ff7bbd;
  display: flex;
  align-items: center;
  border: 1px #ff7bbd solid;
  justify-content: space-between;
`;

type ActiveProp = {
  active: string;
};

const Panel = styled.div`
  height: 0px;
  color: #ffffff;
  overflow: hidden;
  margin-bottom: 24px;
  background-color: transparent;
  transition: 0.6s ease-out;
  height: ${({ active }: ActiveProp) =>
    active === "true" ? "calc(90% - 24px)" : "0px"};

  p {
    margin: 24px 0;
  }
`;

const ChevronRight = styled(BiChevronRight)`
  transition: 0.4s;
  font-size: 1.4rem;
  transform: rotate(
    ${({ active }: ActiveProp) => (active === "true" ? "90deg" : "0deg")}
  );
`;

export default { Container, Button, Panel, ChevronRight };
