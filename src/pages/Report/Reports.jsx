import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThreeCircles } from "react-loader-spinner";

const Reports = () => {
  const [table, setTable] = useState();
  const [columns, setColumns] = useState();

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
          <div dangerouslySetInnerHTML={{ __html: table }}></div>
        </TableStyle>

        <Flex>
          {columns ? (
            columns.map((column, index) => (
              <Column key={index}>
                <Code dangerouslySetInnerHTML={{ __html: column }}></Code>
              </Column>
            ))
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
`;

const Code = styled.div`
  color: #fff;
  padding: 12px;
  line-height: 1.4rem;
  border-radius: 12px;
  border: 2px #ccc solid;
`;

const Column = styled.div`
  width: 50%;
  padding: 18px;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const Container = styled.div`
  padding: 24px 0;

  hr {
    display: none;
  }
`;

const TableStyle = styled.div`
  table {
    color: #fff;
    border-radius: 12px;
    background-color: #444;

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
