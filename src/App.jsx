import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/global";

import Home from "./pages/Home";
import Reports from "./pages/Report";
import Navbar from "./components/Navbar";
import { ReportContextProvider } from "./hooks/Context/ReportsContext";
import { SidebarContextProvider } from "./hooks/Context/SidebarContext";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <SidebarContextProvider>
        <ReportContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </BrowserRouter>
        </ReportContextProvider>
      </SidebarContextProvider>
    </>
  );
};

export default App;
