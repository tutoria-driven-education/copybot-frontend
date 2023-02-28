import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 90px 36px 0 36px;
`;

const Head = styled.div`
  table {
    overflow: hidden;
    border-radius: 12px;

    tr {
      background-color: #45455c;

      th,
      td {
        padding: 12px;
      }
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 50%;
  margin: 10px;
  padding: 12px;
  height: 720px;
  overflow-x: scroll;
  border-radius: 6px;
  border: 2px solid #ff7bbd;
  line-height: 1.4rem;

  & > div {
    width: 100%;
  }

  .file-path {
    color: #000;
    padding: 8px;
    margin: 12px 0;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
    text-align: center;
    background-color: #ff7bbd;
  }

  hr {
    display: none;
  }

  a {
    display: none;
  }

  font[color="#0000FF"] {
    color: #4979e3;
  }

  font[color="#00FF00"] {
    color: #56f05b;
  }

  font[color="#FF00FF"] {
    color: #f073e9;
  }

  font[color="#FF0000"] {
    color: #f05b5b;
  }

  font[color="#00FFFF"] {
    color: #52abff;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

export default { Container, Head, Row, Col };
