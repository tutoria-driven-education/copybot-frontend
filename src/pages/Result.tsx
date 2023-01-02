import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../hooks/ResultContext";
import Results from "../styles/Results";
import Head from "../components/Head";
import Column from "../components/Column";

export default function Result() {
  //const { result } = useContext(ResultContext);

  const [result, setResultTest] = useState({
    table: "",
    columns: [],
  });

  useEffect(() => {
    setResultTest(JSON.parse(localStorage.getItem("result") as string)[0]);
  }, []);

  return (
    <>
      {result.table !== "" ? (
        <>
          <Results.Container>
            <Head innerHTML={result.table} />
            <Results.Row>
              {result.columns.map((column, index) => (
                <Column key={index} innerHTML={column} />
              ))}
            </Results.Row>
          </Results.Container>
        </>
      ) : (
        <>
          <h1>Carregando...</h1>
        </>
      )}
    </>
  );
}
