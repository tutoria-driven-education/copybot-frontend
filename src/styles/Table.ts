import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 90px 32px 0px 32px;
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
  background-color: #333348;
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

const Show = styled.button`
  border: none;
  color: #ffffff;
  background-color: transparent;

  svg {
    font-size: 1.6rem;
  }

  &:hover {
    cursor: pointer;
    color: #cccccc;
  }
`;

export default {
  Container,
  Horizontal,
  Head,
  Body,
  Row,
  Cell,
  HeaderCell,
  Show,
};
