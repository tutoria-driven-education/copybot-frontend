import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultContextProvider } from "./hooks/ResultContext";
import GlobalStyles from "./styles/Global";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Error from "./pages/Error";
import History from "./pages/History";
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
            <Route path="/" element={<PrivateRoute component={<Home />} />} />
            <Route
              path="/result"
              element={<PrivateRoute component={<Result />} />}
            />
            <Route
              path="/history"
              element={<PrivateRoute component={<History />} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ResultContextProvider>
    </>
  );
}
