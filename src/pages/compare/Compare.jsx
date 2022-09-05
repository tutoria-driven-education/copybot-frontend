import { useContext } from "react";
import { useCallback, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { projects } from "../../assets/projects/data";
import { compareTwoProject } from "../../services/api";
import { ReportsContext } from "../../hooks/context/ReportsContext";
import {
  Container,
  Form,
  Group,
  Label,
  LabelSelect,
  Select,
  Input,
  Submit,
  OctoFace,
  Loading,
} from "../home/styles";
import { ThreeDots } from "react-loader-spinner";

const Compare = () => {
  const navigate = useNavigate();

  const { setReports } = useContext(ReportsContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    url1: "",
    url2: "",
    project: "",
  });

  const handleChangeInput = useCallback(
    (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    },
    [formValues]
  );

  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsSubmitted(true);

        const response = await compareTwoProject(formValues);
        console.log(response)
        navigate("/reports");
        setReports([{ ...response.data }]);
        setIsSubmitted(false);
        setFormValues({
          url1: "",
          url2: "",
          project: "",
        });
      } catch (error) {
        setIsSubmitted(false);
      }
    },
    [formValues]
  );

  return (
    <>
      <Container center={true}>
        {isSubmitted ? (
          <Loading>
            <h1>
              Aguarde estamos comparandos os dois projetos! Isso pode demorar um
              pouco.
            </h1>
            <ThreeDots
              color="#ff4791"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </Loading>
        ) : (
          <Form onSubmit={handleSubmitForm}>
            <Group>
              <Label>
                Insira a URL dos repositórios <OctoFace />
              </Label>
              <Input
                name="url1"
                placeholder="Primeiro repositório"
                value={formValues.url1}
                onChange={handleChangeInput}
                required
              />
            </Group>
            <Group>
              <Input
                name="url2"
                placeholder="Segundo repositório"
                value={formValues.url2}
                onChange={handleChangeInput}
                required
              />
            </Group>
            <Group>
              <Select name="project" onChange={handleChangeInput} required>
                <option>Escolha um projeto</option>
                {projects.map((project, index) => (
                  <option value={project.name} key={index}>
                    {project.name}
                  </option>
                ))}
              </Select>
              <LabelSelect>
                <GoTriangleDown />
              </LabelSelect>
            </Group>
            <Group>
              <Submit type="submit">Enviar</Submit>
            </Group>
          </Form>
        )}
      </Container>
    </>
  );
};

export default Compare;
