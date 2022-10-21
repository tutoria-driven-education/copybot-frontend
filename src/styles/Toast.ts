import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const Toast = styled(ToastContainer)`
  .Toastify__toast--error,
  .Toastify__toast--warning {
    color: #fff;
    border-radius: 10px;
    background-color: #333;
    font-family: "Lexend Deca", sans-serif;
  }
`;

export default Toast;
