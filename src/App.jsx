import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/global";
import Navbar from "./components/Navbar/Navbar";

import { ReportsContextProvider } from "./hooks/context/ReportsContext";
import { SidebarContextProvider } from "./hooks/context/SidebarContext";

import Home from "./pages/home";
import Compare from "./pages/compare";
import Reports from "./pages/reports/Reports";
import { TimerContextProvider } from "./hooks/context/TimerContext";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TimerContextProvider>
        <SidebarContextProvider>
          <ReportsContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/compare" element={<Compare />} />
              </Routes>
            </BrowserRouter>
          </ReportsContextProvider>
        </SidebarContextProvider>
      </TimerContextProvider>
    </>
  );
};

export default App;
