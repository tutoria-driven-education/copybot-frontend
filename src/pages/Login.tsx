import React, { useCallback, useEffect, useState } from "react";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { ValidationError } from "yup";
import { toast } from "react-toastify";
import { signInSchema } from "../schema/formSchema";
import { signIn } from "../services/api";
import Form from "../styles/Form";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type SignInValues = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSubmit, register, watch } = useForm<SignInValues>();

  const onSubmit: SubmitHandler<SignInValues> = async (data) => {
    try {
      setIsSubmitting(true);
      await signInSchema.validate(data, { abortEarly: true });

      const response = await signIn(data);

      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return toast.error(`${error.message}`);
      }

      return toast.error(error.response);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const storageToken = JSON.parse(localStorage.getItem("token") as string);

    if (!storageToken) {
      return;
    }

    navigate("/");
  }, []);

  return (
    <>
      <Form.Container>
        <Form.Horizontal onSubmit={handleSubmit(onSubmit)} login={true}>
          <Form.Title>Entrar</Form.Title>
          <Form.Group>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="E-mail"
              disabled={isSubmitting}
              {...register("email")}
              active={watch("email") ? true : false}
            />
            <Form.LabelIcon>
              <BiEnvelope />
            </Form.LabelIcon>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              autoComplete="off"
              placeholder="Senha"
              disabled={isSubmitting}
              {...register("password")}
              active={watch("password") ? true : false}
            />
            <Form.LabelIcon>
              <BiLock />
            </Form.LabelIcon>
          </Form.Group>
          <Form.Group>
            <Form.Submit type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <ThreeDots height={50} width={50} color="#ffffff" />
              ) : (
                "Entrar"
              )}
            </Form.Submit>
          </Form.Group>
        </Form.Horizontal>
      </Form.Container>
    </>
  );
}
