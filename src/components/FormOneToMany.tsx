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

// ToDo: Criar camada para os tipos

type FieldValues = {
  url: string;
  project: string;
  basefile: Blob[];
};

export default function FormOneToMany({
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

      if (response.status === 200) {
        const newResponse = { ...response.data, type: "one-to-many" };

        localStorage.setItem("result", JSON.stringify(newResponse) as string);
        setResult(newResponse);
        navigate("/result");
      }
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return toast.error(`${error.message}`);
      }

      return toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fileName: any = watch("basefile");

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
          <Form.LabelFile
            htmlFor="basefile"
            labelText={
              fileName && fileName.length !== 0
                ? fileName[0].name
                : "Nenhum arquivo selecionado"
            }
          />
          <input type="file" id="basefile" {...register("basefile")} />
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
