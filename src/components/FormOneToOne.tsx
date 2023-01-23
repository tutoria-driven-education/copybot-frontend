import { ValidationError } from "yup";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiGitBranch, BiGitRepoForked, BiCodeBlock } from "react-icons/bi";

import Loading from "./Loading";
import Form from "../styles/Form";
import projects from "../data/projectsData";
import { checkOneToOne } from "../services/api";
import { oneToOneSchema } from "../schema/formSchema";
import { ResultContext } from "../hooks/ResultContext";

type FieldValues = {
  url1: string;
  url2: string;
  project: string;
};

function FormOneToOne({
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

      await oneToOneSchema.validate(data, { abortEarly: true });

      const response = await checkOneToOne(data);
      
      if (response.status === 200) {
        localStorage.setItem(
          "result",
          JSON.stringify(response.data.value) as string
        );
        setResult(response.data.value);
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

  return (
    <>
      <Form.Horizontal onSubmit={handleSubmit(submitForm)} login={false}>
        <Form.Group>
          <Form.Control
            autoComplete="off"
            placeholder="Entregue"
            disabled={isSubmitting}
            {...register("url1")}
            active={watch("url1") ? true : false}
          />
          <Form.LabelIcon>
            <BiGitBranch />
          </Form.LabelIcon>
        </Form.Group>
        <Form.Group>
          <Form.Control
            autoComplete="off"
            placeholder="Fonte"
            {...register("url2")}
            disabled={isSubmitting}
            active={watch("url2") ? true : false}
          />
          <Form.LabelIcon>
            <BiGitRepoForked />
          </Form.LabelIcon>
        </Form.Group>
        <Form.Group>
          <Form.Select
            {...register("project")}
            active={watch("project") ? true : false}
          >
            <option value="">Selecione um projeto</option>
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
            {isSubmitting ? (
              <ThreeDots
                height="45"
                width="65"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            ) : (
              "Enviar"
            )}
          </Form.Submit>
        </Form.Group>
      </Form.Horizontal>
    </>
  );
}

export default FormOneToOne;
