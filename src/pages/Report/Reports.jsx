import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Reports = () => {
  const [mossGeneratedPage, setMossGeneratedPage] = useState();
  const [mossReport, setMossReport] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const getTable2 = useRef();

  const handleModalDisplay = () => {
    if (modalShow) {
      setModalShow(!modalShow);
      return;
    }
    // Medida provisória
    //let getTable = await getTable2.current.children[11];
    let getTable = document.getElementsByTagName("table");

    let table = "";

    for (const td of getTable) {
      table += td.outerHTML;
      console.log("as");
    }

    setMossReport(table);
    setModalShow(!modalShow);
  };

  const getMossGeneratedPage = useCallback(async () => {
    try {
      let promise = await axios.get("http://localhost:5000/pagina");

      setMossGeneratedPage(promise.data);
    } catch (error) {
      console.log(error);
    }
  }, [mossReport]);

  useEffect(() => {
    getMossGeneratedPage();
  }, []);

  return (
    <>
      <Container>
        <HiddenElement>
          <div
            dangerouslySetInnerHTML={{ __html: mossGeneratedPage }}
            ref={getTable2}
          ></div>
        </HiddenElement>
      </Container>

      <button onClick={handleModalDisplay}>Abrir relatório</button>

      <Modal show={modalShow}>
        <ModalContent>
          <ModalDialog>
            <TableStyles>{parse(mossReport)}</TableStyles>
          </ModalDialog>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Reports;

const Modal = styled.div`
  background-color: #0000007a;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  overflow-y: scroll;
  left: 0;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ModalContent = styled.div`
  width: 800px;
  display: flex;
  margin: 32px auto;
  align-items: flex-start;
  height: calc(100% - 32px * 2);
`;

const ModalDialog = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
`;

export const Container = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: center;
`;

const TableStyles = styled.div`
  table {
    color: #000;
    border-radius: 12px;
    background-color: #ccc;

    tbody {
      a {
        color: #000;
        text-decoration: none;
      }

      th,
      td {
        padding: 12px;
      }
    }
  }
`;

const HiddenElement = styled.div`
  display: none;
`;
