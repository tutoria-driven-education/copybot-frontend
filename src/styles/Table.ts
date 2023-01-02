import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 90px;

  @media screen and (min-width: 768px) {
    width: 720px;
  }

  @media screen and (min-width: 992px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }

  @media screen and (min-width: 1400px) {
    width: 1320px;
  }

  @media screen and (min-width: 1600px) {
    width: 1500px;
  }
`;

const Horizontal = styled.table`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
`;

const Head = styled.thead``;

const HeaderCell = styled.th`
  padding: 12px;
  background-color: #272736;
`;

const Body = styled.tbody``;

const Row = styled.tr`
  background-color: #45455c;
`;

const Cell = styled.td`
  padding: 16px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default { Container, Horizontal, Head, Body, Row, Cell, HeaderCell };
