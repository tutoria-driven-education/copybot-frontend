import styled from "styled-components";
import { GoCloudUpload, GoOctoface } from "react-icons/go";

export const Form = styled.form`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const FormLabel = styled.label`
  color: #f5f5f5;
  font-size: 1.2rem;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 50px;
  border: none;
  width: 400px;
  padding: 0 48px 0 12px;
  font-size: 1.2rem;
  margin: 0 0 12px 0;
  border-radius: 8px;
  background-color: #a19f9f;

  &:disabled {
    color: #ccc;
    background-color: #7a7a7a;
  }
`;

export const Select = styled.select`
  height: 50px;
  border: none;
  width: 400px;
  padding: 0 48px 0 12px;
  font-size: 1.2rem;
  margin: 0 0 12px 0;
  border-radius: 8px;
  background-color: #a19f9f;
`;

export const UploadIcon = styled(GoCloudUpload)`
  top: 50px;
  right: 12px;
  color: #000;
  font-size: 1.6rem;
  position: absolute;
`;

export const OctoFace = styled(GoOctoface)`
  color: #fff;
  font-size: 1.6rem;
  margin: 0 0 0 6px;
`;

export const Button = styled.button`
  height: 50px;
  width: 280px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 12px;
  transition: 0.2s;
  color: #f5f5f5;
  background-color: #ff4791;

  &:hover {
    background-color: #c44276;
  }
`;
