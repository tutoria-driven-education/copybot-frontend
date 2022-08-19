import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/global";

import Home from "./pages/Home";
import Reports from "./pages/Report";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
