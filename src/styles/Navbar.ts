import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  padding: 24px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #45455c;
`;

const Brand = styled.div`
  img {
    width: 132px;
  }
`

const Button = styled.button`
  left: 24px;
  border: none;
  position: absolute;
  background-color: transparent;

  svg {
    color: #fff;
    font-size: 2rem;
  }
`

export default { Container, Brand, Button };
