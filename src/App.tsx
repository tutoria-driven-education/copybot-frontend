import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components";
import { Home, Result } from "./pages";
import { ResultsContextProvider } from "./hooks/ResultContext";


const App = () => {
  return (
    <>
      <ResultsContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resultado" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </ResultsContextProvider>
    </>
  );
};

export default App;
