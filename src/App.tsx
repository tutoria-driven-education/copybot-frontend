import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultContextProvider } from "./hooks/ResultContext";
import GlobalStyles from "./styles/Global";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import History from "./pages/History";
import ResultMany from "./pages/ResultMany";
import Toast from "./components/Toast";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Toast />
      <ResultContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <>
                    <Navbar />
                    <Home />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/result"
              element={
                <PrivateRoute>
                  <>
                    <Navbar />
                    <Result />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/result-many"
              element={
                <PrivateRoute>
                  <>
                    <Navbar />
                    <ResultMany />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <>
                    <Navbar />
                    <History />
                  </>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ResultContextProvider>
    </>
  );
}
