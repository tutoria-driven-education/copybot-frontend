import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const Horizontal = styled.form`
  width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 0.75rem;
  }
`;

const Group = styled.div`
  width: 100%;
  padding: 8px;
  position: relative;
`;

const Control = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #a19f9f;
  padding: 12px;
  font-family: "Lexend Deca", sans-serif;

  &::placeholder {
    color: #444;
  }

  &:focus {
    &::placeholder {
      color: #222;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 0 12px;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #a19f9f;
  font-family: "Lexend Deca", sans-serif;
`;

const Label = styled.label`
  top: 20px;
  right: 24px;
  position: absolute;
`;

const Submit = styled.button`
  width: 100%;
  color: #fff;
  height: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s;
  border: none;
  border-radius: 10px;
  background-color: #ff4791;

  &:hover {
    background-color: #e53a7f;
  }
`;

const Error = styled(ToastContainer)`
  .Toastify__toast--error,
  .Toastify__toast--warning,
  .Toastify__toast--success {
    color: #fff;
    border-radius: 10px;
    background-color: #333;
    font-family: "Lexend Deca", sans-serif;
  }
`;

const Loading = styled.div`
  width: 580px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.4rem;
  }
`;

export default {
  Horizontal,
  Group,
  Control,
  Label,
  Submit,
  Title,
  Select,
  Error,
  Loading,
};
