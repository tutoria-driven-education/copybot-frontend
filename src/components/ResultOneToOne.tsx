import { useContext, useEffect } from "react";

import Results from "../styles/Results";
import { Head, Column } from "./Result";
import { ResultContext } from "../hooks/ResultContext";

export default function ResultOneToOne() {
  const { result } = useContext(ResultContext);

  return (
    <>
      {result.table ? (
        <>
          <Results.Container>
            <Head />
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
