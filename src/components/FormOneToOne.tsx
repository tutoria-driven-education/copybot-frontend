import { ValidationError } from "yup";
import { toast } from "react-toastify";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  BiGitBranch,
  BiGitRepoForked,
  BiCodeBlock,
  BiHelpCircle,
} from "react-icons/bi";

import Form from "../styles/Form";
import projects from "../data/projectsData";
import { checkOneToOne } from "../services/api";
import { oneToOneSchema } from "../schema/formSchema";
import { ResultContext } from "../hooks/ResultContext";
import { MossContext } from "../hooks/MossContext";

type FieldValues = {
  url1: string;
  url2: string;
  project: string;
  basefile: Blob[];
};

export default function FormOneToOne({
  isSubmitting,
  setIsSubmitting,
}: {
  isSubmitting: boolean;
  setIsSubmitting: Function;
}) {
  const navigate = useNavigate();
  const { mossStatus } = useContext(MossContext);
  const { setResult } = useContext(ResultContext);
  const { handleSubmit, register, watch } = useForm<FieldValues>();

  const submitForm: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      try {
        setIsSubmitting(true);

        await oneToOneSchema.validate(data, { abortEarly: true });

        if (
          data.basefile.length > 0 &&
          data.basefile[0].type !== "application/x-zip-compressed"
        ) {
          throw new ValidationError("O arquivo deve ser um zip");
        }
        if (!mossStatus) {
          return toast.warn("O Moss está offline!");
        }

        await oneToOneSchema.validate(data, { abortEarly: true });

        const response = await checkOneToOne(data);

        if (response.status === 200) {
          const newResponse = { ...response.data.value, type: "one-to-one" };
          localStorage.setItem("result", JSON.stringify(newResponse) as string);

          setResult(newResponse);
          navigate("/result");
        }
      } catch (error: any) {
        if (error instanceof ValidationError) {
          return toast.error(`${error.message}`);
        }

        console.log(error)
        return toast.error(error.response.data.message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [mossStatus]
  );

  const fileName: any = watch("basefile");

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
          <Form.LabelFile
            htmlFor="basefile"
            labelText={
              fileName && fileName.length !== 0
                ? fileName[0].name
                : "Nenhum arquivo selecionado"
            }
          />
          <input type="file" id="basefile" {...register("basefile")} />
          <Form.Info>
            <Form.WrapperToolTip>
              <Form.ToolTip left="-46px" backgroundOpacity={false}>
                Selecione um arquivo base para os projetos enviados!
                Desabilitada no momento.
              </Form.ToolTip>
              <BiHelpCircle />
            </Form.WrapperToolTip>
          </Form.Info>
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
