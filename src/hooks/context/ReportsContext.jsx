import { createContext, useState } from "react";

const ReportsContext = createContext();

const ReportsContextProvider = ({ children }) => {
  const [reports, setReports] = useState();

  return (
    <ReportsContext.Provider value={{ reports, setReports }}>
      {children}
    </ReportsContext.Provider>
  );
};

export { ReportsContext, ReportsContextProvider };
  