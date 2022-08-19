import { useState } from "react";
import styled from "styled-components";
import { GoCloudUpload, GoOctoface } from "react-icons/go";

const Home = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <Container>
        <Form>
          <Label htmlFor="url">
            Insira a URL do Github <GithubIcon />
          </Label>
          <Input
            id="url"
            value={inputValue}
            onChange={() => setInputValue(setInputValue)}
          />
          <UploadIcon />
          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  color: #f5f5f5;
  font-size: 1.2rem;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 40px;
  border: none;
  width: 400px;
  padding: 0 8px;
  font-size: 1.2rem;
  margin: 0 0 12px 0;
  border-radius: 8px;
  background-color: #a19f9f;
`;

const UploadIcon = styled(GoCloudUpload)`
  top: 44px;
  right: 12px;
  color: #000;
  font-size: 1.6rem;
  position: absolute;
`;

const GithubIcon = styled(GoOctoface)`
  font-size: 1.6rem;
  margin: 0 0 0 6px;
`;

const Button = styled.button`
  height: 40px;
  width: 250px;
  border: none;
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
