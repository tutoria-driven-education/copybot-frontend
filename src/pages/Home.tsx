import { useCallback, useState, useContext } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import Form from "../styles/Form";
import Icons from "../styles/Icons";
import Toast from "../styles/Toast";
import { Container } from "../styles/Layout";

import projects from "../assets/data/projects";
import { compareTwoProject } from "../services/api";
import { ResultContext } from "../hooks/ResultContext";
import formSchemaValidate from "../schema/formSchemaValidate";

const Home = () => {
  const navigate = useNavigate();

  const { setResult } = useContext<React.SetStateAction<any>>(ResultContext);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ url1: "", url2: "", project: "" });

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [form]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await formSchemaValidate(form);
        setLoading(true);

        const response = await compareTwoProject(form);

        if (response.data) {
          navigate("/resultado");
          setResult(response.data);
          setForm({ url1: "", url2: "", project: "" });
          return;
        }
        toast.success("Nenhuma similaridade encontrada!");
      } catch (error: any) {
        if (error instanceof Yup.ValidationError) {
          return toast.error(`${error.message}`);
        }
        toast.warning(`${error.message}`);
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <>
      <Toast position="bottom-right" hideProgressBar />
      <Container>
        {loading ? (
          <Form.Loading>
            <Form.Title>
              Aguarde, estamos comparando os dois projetos! Isso pode demorar
              um pouco.
            </Form.Title>
            <ThreeDots
              color="#ff4791"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </Form.Loading>
        ) : (
          <Form.Horizontal onSubmit={handleSubmit}>
            <Form.Title>
              Insira as URLs dos repositórios
              <Icons.Github />
            </Form.Title>
            <Form.Group>
              <Form.Control
                name="url1"
                value={form.url1}
                placeholder="Primeira URL do repositório"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="url2"
                value={form.url2}
                placeholder="Segunda URL do repositório"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                name="project"
                onChange={(e) => setForm({ ...form, project: e.target.value })}
              >
                <option>Escolha o projeto</option>
                {projects.map((project, index) => (
                  <option value={project} key={index}>
                    {project}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Submit type="submit">Enviar</Form.Submit>
            </Form.Group>
          </Form.Horizontal>
        )}
      </Container>
    </>
  );
};

export default Home;
