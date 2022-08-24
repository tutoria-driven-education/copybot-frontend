import React, { useCallback, useContext, useState } from "react";
import { postRepositoryUrl } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ReportContext } from "../../hooks/Context/ReportsContext";

import {
  Form,
  FormGroup,
  FormLabel,
  UploadIcon,
  Input,
  Select,
  OctoFace,
  Button,
} from "../styles/Form";

import { projectData } from "./ProjectsData";

const Home = () => {
  const [formValues, setFormValues] = useState({ project: "", url: "" });
  const { setReports } = useContext(ReportContext);

  let navigate = useNavigate();

  const handleChangeFormValues = useCallback(
    (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    },
    [formValues]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await postRepositoryUrl(formValues);

        setReports(response.data);
        localStorage.setItem("teste",JSON.stringify(response.data));

        navigate("/reports");
      } catch (error) {
        console.log(error);
      }
    },
    [formValues]
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            Insira a URL do repositório <OctoFace />
          </FormLabel>
          <Input
            name="url"
            onChange={handleChangeFormValues}
            value={formValues.url}
          />
          <UploadIcon />
        </FormGroup>
        <FormGroup>
          <FormLabel>Selecione o nome do projeto</FormLabel>
          <Select name="project" onChange={handleChangeFormValues}>
            {projectData.map((project, index) => (
              <option value={project.name} key={index}>
                {project.selectName}
              </option>
            ))}
          </Select>
        </FormGroup>
        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
};

export default Home;
