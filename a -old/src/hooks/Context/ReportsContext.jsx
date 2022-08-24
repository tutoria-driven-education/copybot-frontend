import { createContext, useState } from "react";

const ReportContext = createContext();

const ReportContextProvider = ({ children }) => {
  const [reports, setReports] = useState();

  return (
    <ReportContext.Provider value={{ reports, setReports }}>
      {children}
    </ReportContext.Provider>
  );
};

export { ReportContext, ReportContextProvider };
