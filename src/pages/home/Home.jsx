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

  const myFunction = async () => {
    let promise = await axios.get("http://localhost:5000/pagina");

    setPage(promise.data);
  };

  function createMarkup() {
    return { __html: page };
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={myFunction}>Get</button>

      <button onClick={stylePage}>Style page</button>

      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {table.map(() => {
            
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
