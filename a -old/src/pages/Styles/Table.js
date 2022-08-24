import styled from "styled-components";

export const TableStyles = styled.div`
  margin: 74px 0 0;
  
  table {
    color: #fff;
    border-radius: 12px;
    background-color: #444;

    tr {
      padding: 24px;
      display: none;
      flex-wrap: wrap;
      justify-content: center;

      &:first-child {
        display: flex;
      }

      th {
        &:last-child {
          display: none;
        }
      }
    }

    th,
    td {
      padding: 6px 12px;

      a {
        color: #fff;
        cursor: default;
        text-decoration: none;
      }
    }
  }
`;
