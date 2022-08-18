import axios from "axios";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  Children,
  cloneElement,
} from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Home = () => {
  const [mossURL, setMossURL] = useState([]);
  const [tableMoss, setTableMoss] = useState("");

  const mossLayoutRef = useRef();

  const getMossURL = useCallback(async () => {
    try {
      let promise = await axios.get("http://localhost:5000/pagina");

      setMossURL(promise.data);

      // Apenas medidas provisórias
      let getTableTagName = document.getElementsByTagName("table");

      let table = "";

      for (const td of getTableTagName) {
        table += td.outerHTML;
      }

      setTableMoss(table);
    } catch (error) {
      console.log(error);
    }
  }, [mossURL]);

  useEffect(() => {
    getMossURL();
  }, [getMossURL]);

  return (
    <>
      <HiddenElement>
        <div
          dangerouslySetInnerHTML={{ __html: mossURL }}
          ref={mossLayoutRef}
        ></div>
      </HiddenElement>

      {/* <TableStyle>{parse(tableMoss)}</TableStyle> */}
    </>
  );
};

export default Home;

const HiddenElement = styled.div`
  display: none;
`;

