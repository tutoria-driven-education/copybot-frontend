import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface ICreateContextType {
  result: {
    table: string;
    columns: string[];
  };
  setResult: Dispatch<
    SetStateAction<{
      table: string;
      columns: string[];
    }>
  >;
}

type UseStateType = {
  table: string;
  columns: string[];
}

type ContextProviderProps = {
  children: React.ReactNode;
};

const ResultContext = createContext<ICreateContextType>({
  result: {
    table: "",
    columns: [],
  },
  setResult: () => {},
});

const ResultContextProvider = ({ children }: ContextProviderProps) => {
  const [result, setResult] = useState<UseStateType>({
    table: "",
    columns: [],
  });

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultContextProvider };
