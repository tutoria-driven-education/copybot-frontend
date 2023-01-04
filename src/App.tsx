import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultContextProvider } from "./hooks/ResultContext";
import GlobalStyles from "./styles/Global";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import History from "./pages/History";
import CompareMany from "./pages/CompareMany";
import ResultMany from "./pages/ResultMany";
import Toast from "./components/Toast";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Toast />
      <ResultContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/result"
              element={
                <>
                  <Navbar />
                  <Result />
                </>
              }
            />
            <Route
              path="/result-many"
              element={
                <>
                  <Navbar />
                  <ResultMany />
                </>
              }
            />
            <Route
              path="/history"
              element={
                <>
                  <Navbar />
                  <History />
                </>
              }
            />
            <Route
              path="/one-to-database"
              element={
                <>
                  <Navbar />
                  <CompareMany />
                </>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ResultContextProvider>
    </>
  );
}
