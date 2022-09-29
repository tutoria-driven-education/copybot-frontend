import { createContext, useState } from "react";

interface ResultContextProps {
  children: React.ReactNode;
}

const ResultContext = createContext(null);

const ResultsContextProvider = ({ children }: ResultContextProps) => {
  const [result, setResult] = useState({
    studentName: "",
    studentDatabase: "",
    table: "",
    columns: [],
  });

  return (
    <ResultContext.Provider
      value={{ result, setResult } as React.SetStateAction<any>}
    >
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultsContextProvider };
