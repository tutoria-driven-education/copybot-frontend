import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import ResultOneToOne from "../components/ResultOneToOne";
import ResultOneToMany from "../components/ResultOneToMany";
import { ResultContext } from "../hooks/ResultContext";

export default function Result() {
  const { result, setResult } = useContext(ResultContext);

  if (!result.type) {
    toast.error("Resultado não encontrado!");

    return <Navigate to="/" />;
  }

  useEffect(() => {
    const storageResult = localStorage.getItem("result");

    if (storageResult) {
      setResult(JSON.parse(storageResult));
    }
  }, []);

  return (
    <>
      {result.type === "one-to-one" ? <ResultOneToOne /> : <ResultOneToMany />}
    </>
  );
}
