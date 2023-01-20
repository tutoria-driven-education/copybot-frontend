import { ValidationError } from "yup";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiGitBranch, BiCodeBlock } from "react-icons/bi";

import Form from "../styles/Form";
import projects from "../data/projectsData";
import { checkOneToMany } from "../services/api";
import { ResultContext } from "../hooks/ResultContext";

type FieldValues = {
  url: string;
  project: string;
};

function FormOneToMany({
  isSubmitting,
  setIsSubmitting,
}: {
  isSubmitting: boolean;
  setIsSubmitting: Function;
}) {
  const navigate = useNavigate();
  const { setResult } = useContext(ResultContext);
  const { handleSubmit, register, watch } = useForm<FieldValues>();

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await checkOneToMany(data);

      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("result", JSON.stringify(response.data) as string);
        setResult(response.data);
        navigate("/result");
      }
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return toast.error(`${error.message}`);
      }

      console.log(error.response)
      return toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form.Horizontal onSubmit={handleSubmit(submitForm)} login={false}>
        <Form.Group>
          <Form.Control
            autoComplete="off"
            placeholder="Entregue"
            {...register("url")}
            disabled={isSubmitting}
            active={watch("url") ? true : false}
          />
          <Form.LabelIcon>
            <BiGitBranch />
          </Form.LabelIcon>
        </Form.Group>
        <Form.Group>
          <Form.Select
            {...register("project")}
            active={watch("project") ? true : false}
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
      </Form.Horizontal>
    </>
  );
}

export default FormOneToMany;
