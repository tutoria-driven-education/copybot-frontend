import styled from "styled-components";

const Content = styled.div`
  width: 50%;
  padding: 0 12px;
`;

const Border = styled.div`
  height: 700px;
  padding: 12px;
  overflow: scroll;
  border-radius: 4px;
  border: 2px solid #fff;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #494949;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

// Possibilidade de escolher qualquer cor!
const StyledInnerHTML = styled.div`
  line-height: 1.4rem;

  hr {
    display: none;
  }

  a {
    display: none;
  }

  font[color="#00FF00"] {
    color: #f25c61;
  }

  .title {
    color: #000;
    padding: 8px;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 8px;
    text-align: center;
    background-color: #ff7bbd;
  }
`;

export default { Content, Border, StyledInnerHTML };
