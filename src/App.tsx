import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { AuthRoute, Navbar } from "./components";
import { Home, Login, Result } from "./pages";
import { ResultsContextProvider } from "./hooks/ResultContext";

const App = () => {
  return (
    <>
      <ResultsContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Login />} />
            <Route
              path="/home"
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            />
            <Route
              path="/result"
              element={
                <AuthRoute>
                  <Result />
                </AuthRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ResultsContextProvider>
    </>
  );
};

export default App;
