import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Page from "./Page";

const Home = () => {
  const [page, setPage] = useState();
  const [table, setTable] = useState([]);

  const div = useRef();

  const stylePage = () => {
    let childrens = div.current.childNodes;

    let td = document.getElementsByTagName("td");

    setTable(td);
  };

  function createMarkup() {
    return { __html: page };
  }

  useEffect(() => {
    let promise = axios.get("http://localhost:5000/pagina");

    setPage(promise.data);
  }, []);

  return (
    <>
      <h1>Home</h1>

      <button onClick={stylePage}>Style page</button>

      <div dangerouslySetInnerHTML={createMarkup()}></div>

      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {table.map((element) => {
            <tr>{element}</tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;

const Element = styled.div`
  a {
    color: red;
  }
`;
