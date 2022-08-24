import styled from "styled-components";

const ReportStyle = styled.div`
  margin: 0 0 12px 0;

  table {
    width: 800px;
    border-radius: 10px;
    background-color: #1d1c26;

    tbody {
      tr {
        display: none;

        &:first-child {
          display: block;
        }

        td,
        th {
          padding: 36px 24px;
          vertical-align: middle;
        }

        th {
          &:nth-child(1),
          &:nth-child(3) {
            min-width: 360px;
            max-width: 550px;
          }

          &:last-child {
            display: none;
          }
        }
      }
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 50%;
  padding: 12px;
`;

const Code = styled.div`
  width: 100%;
  height: 74vh;
  padding: 12px;
  overflow: scroll;
  border-radius: 4px;
  line-height: 1.4rem;
  border: 2px #fff solid;

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

  hr {
    display: none;
  }
`;

export { ReportStyle,Row, Column, Code };
