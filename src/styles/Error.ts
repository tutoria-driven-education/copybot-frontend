import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;


  svg {
    color: #f44336;
    font-size: 12rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 14px;
  }

  p {
    margin-bottom: 24px;
  }
`;


const Navigate = styled(Link)`
  color: #fff;
  transition: .2;
  
  &:hover {
    color: #ccc;
  }
`

export default { Container, Navigate };
