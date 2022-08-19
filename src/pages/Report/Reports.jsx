import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThreeCircles } from "react-loader-spinner";
import Column from "./Column";

const Reports = () => {
  const [table, setTable] = useState();
  const [columns, setColumns] = useState();

  const teste = useRef();

  const getMossGeneratedPage = useCallback(async () => {
    try {
      let promise = await axios.get("http://localhost:5000/pagina");

      setTable(promise.data.table);
      setColumns(promise.data.columns);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getMossGeneratedPage();
  }, [getMossGeneratedPage]);

  return (
    <>
      <Container>
        <TableStyle>
          <div
            ref={teste}
            dangerouslySetInnerHTML={{
              __html: table,
            }}
          ></div>
        </TableStyle>

        <Flex>
          {columns ? (
            columns.map((column, index) => {
              let newColumn = column
                .replace(/&gt;&gt;&gt;&gt;/g, "<br/><br/><div class='title'>")
                .replace(/file/g, "Arquivo")
                .split(".js")
                .join(".js</div>");

              return <Column key={index} newColumn={newColumn} />;
            })
          ) : (
            <ModalLoader>
              <ThreeCircles
                height="100"
                width="100"
                color="#FF4791"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </ModalLoader>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default Reports;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  padding: 24px 0;

  h1 {
    color: red;
  }

  hr {
    display: none;
  }
`;

const TableStyle = styled.div`
  margin-top: 74px;

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

const ModalLoader = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000007f;
`;
