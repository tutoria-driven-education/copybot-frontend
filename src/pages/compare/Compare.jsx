import { useCallback, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { projects } from "../../assets/projects/data";
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
} from "../home/styles";

const Compare = () => {
  const [formValues, setFormValues] = useState({
    firstRepository: "",
    secondRepository: "",
    project: "",
  });

  const handleChangeInput = useCallback(
    (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    },
    [formValues]
  );

  const handleSubmitForm = useCallback(() => {}, []);

  return (
    <>
      <Container center={true}>
        <Form>
          <Group>
            <Label>
              Insira a URL dos repositórios <OctoFace />
            </Label>
            <Input
              name="firstRepository"
              placeholder="Primeiro repositório"
              value={formValues.firstRepository}
              onChange={handleChangeInput}
              required
            />
          </Group>
          <Group>
            <Input
              name="secondRepository"
              placeholder="Segundo repositório"
              value={formValues.secondRepository}
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
            <Submit>Enviar</Submit>
          </Group>
        </Form>
      </Container>
    </>
  );
};

export default Compare;
