import { useCallback, useState, useContext } from "react";
import { BiGitBranch, BiCodeBlock } from "react-icons/bi";
import { MagnifyingGlass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { FcVlc } from "react-icons/fc";

import Form from "../styles/Form";
import useForm from "../hooks/UseForm";
import projects from "../data/projectsData";
import { checkOneToMany } from "../services/api";
import { ResultContext } from "../hooks/ResultContext";

export default function CompareMany() {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({ url: "", project: "" });
  const [isSubmitting, setIsSubmitting] = useState(true);
  const { setResult } = useContext(ResultContext);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsSubmitting(true);

        const response = await checkOneToMany(values);

        if (response.status === 200) {
          localStorage.setItem(
            "result",
            JSON.stringify(response.data) as string
          );
          setResult(response.data);
          navigate("/result-many");
        }
      } catch (error) {
        setIsSubmitting(false);
      }
    },
    [values, isSubmitting]
  );

  return (
    <>
      <Form.Container>
        {isSubmitting ? (
          <>
            <FcVlc fontSize={128} />
            <h2 className="loading-text">Página em manutenção, em breve será liberada!</h2>
            {/* <MagnifyingGlass
              height="90"
              width="90"
              color="#ff7bbd"
              ariaLabel="three-dots-loading"
              visible={true}
            /> */}
          </>
        ) : (
          <Form.Horizontal onSubmit={handleSubmit} login={false}>
            <Form.Group>
              <Form.Control
                name="url"
                autoComplete="off"
                placeholder="Entregue"
                onChange={handleChange}
                value={values.url}
                disabled={isSubmitting}
                active={values.url ? true : false}
              />
              <Form.LabelIcon>
                <BiGitBranch />
              </Form.LabelIcon>
            </Form.Group>
            <Form.Group>
              <Form.Select
                name="project"
                onChange={handleChange}
                active={values.project ? true : false}
              >
                <option>Selecione um projeto</option>
                {projects.map((project) => (
                  <option key={project} value={project}>
                    {project}
                  </option>
                ))}
              </Form.Select>
              <Form.LabelIcon>
                <BiCodeBlock />
              </Form.LabelIcon>
            </Form.Group>
            <Form.Group>
              <Form.Submit type="submit" disabled={isSubmitting}>
                Enviar
              </Form.Submit>
            </Form.Group>
            <Form.Navigate to="/history">
              Histórico de comparações
            </Form.Navigate>
          </Form.Horizontal>
        )}
      </Form.Container>
    </>
  );
}
