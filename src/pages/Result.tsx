import { useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import Result from "../styles/Result";
import { Column, Table } from "../components";
import { ResultContext } from "../hooks/ResultContext";

const Results = () => {
  const navigate = useNavigate();
  const { result } = useContext<React.SetStateAction<any>>(ResultContext);

  useEffect(() => {
    if (!result.table) {
      navigate("/home", { state: { error: true } });
    }
  }, []);

  return (
    <>
      {result.table ? (
        <>
          <Result.Flex>
            <Table
              table={result.table}
              studentName={result.studentName}
              studentDatabase={result.studentDatabase}
            />
          </Result.Flex>
          <Result.Container>
            {result.columns.map((column: string, index: number) => (
              <Column key={index} column={column} />
            ))}
          </Result.Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Results;
