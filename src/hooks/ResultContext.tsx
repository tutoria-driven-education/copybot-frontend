import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface ICreateContextType {
  result: {
    type: string;
    table: string;
    columns: string[];
    studentNameOne: string;
    studentNameTwo: string;
  };
  setResult: Dispatch<
    SetStateAction<{
      type: string;
      table: string;
      columns: string[];
      studentNameOne: string;
      studentNameTwo: string;
    }>
  >;
}

type UseStateType = {
  type: string;
  table: string;
  columns: string[];
  studentNameOne: string;
  studentNameTwo: string;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

const ResultContext = createContext<ICreateContextType>({
  result: {
    type: "",
    table: "",
    columns: [],
    studentNameOne: "",
    studentNameTwo: "",
  },
  setResult: () => {},
});

const ResultContextProvider = ({ children }: ContextProviderProps) => {
  const storageItem = JSON.parse(localStorage.getItem("result") as string);

  const [result, setResult] = useState<UseStateType>(
    storageItem || {
      type: "",
      table: "",
      columns: [],
      studentNameOne: "",
      studentNameTwo: "",
    }
  );

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultContextProvider };
