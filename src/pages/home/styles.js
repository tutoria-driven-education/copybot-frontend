import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoOctoface, GoCloudUpload } from "react-icons/go";

const Container = styled.section`
  height: 90vh;
  padding: 32px;
  display: flex;
  position: relative;
  margin-top: 91px;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "initial")};
  justify-content: ${(props) => (props.center ? "center" : "initial")};
`;

const Form = styled.form`
  width: 400px;
  padding: 12px;
`;

const Group = styled.div`
  padding: 8px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  color: #f5f5f5;
  font-size: 1.2rem;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 0 42px 0 12px;
  background-color: #a19f9f;

  &::placeholder {
    color: #444;
    font-weight: 500;
  }

  &:focus {
    &::placeholder {
      color: #222;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  height: 45px;
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 0 38px 0 12px;
  background-color: #a19f9f;
  -moz-appearance: none;
  -webkit-appearance: none;

  &::-ms-expand {
    display: none;
  }
`;

const Submit = styled.button`
  width: 80%;
  color: #fff;
  padding: 12px;
  border: none;
  cursor: pointer;
  margin: 0 0 18px 0;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: #ff4791;

  &:hover {
    background-color: #c44276;
  }
`;

const StyledLink = styled(Link)`
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;

const OctoFace = styled(GoOctoface)`
  color: #fff;
  font-size: 1.4rem;
  margin: 0 0 0 12px;
`;

const CloudUpload = styled(GoCloudUpload)`
  top: 52px;
  right: 18px;
  color: #000;
  font-size: 1.6rem;
  position: absolute;
`;

const LabelSelect = styled.label`
  top: 20px;
  right: 20px;
  color: #000;
  font-size: 1.4rem;
  position: absolute;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    width: 550px;
    font-size: 1.4rem;
    margin: 0 0 32px 0;
    text-align: center;
    line-height: 2.2rem;
  }
`;

export {
  Container,
  Form,
  Group,
  Label,
  Input,
  Select,
  Submit,
  OctoFace,
  CloudUpload,
  LabelSelect,
  Loading,
  StyledLink,
};
