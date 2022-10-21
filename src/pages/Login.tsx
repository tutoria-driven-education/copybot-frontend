import { useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import loginSchemaValidate from "../schema/loginSchemaValidate";
import { signIn } from "../services/api";

import Icons from "../styles/Icons";
import { Container } from "../styles/Layout";
import LoginForm from "../styles/LoginForm";
import Toast from "../styles/Toast";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

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
        await loginSchemaValidate(form);
        setLoading(true);

        const response = await signIn(form);

        if (response.status === 200) {
          navigate("/home");
          localStorage.setItem("token", JSON.stringify(response.data.token));
          return;
        }
      } catch (error: any) {
        if (error instanceof Yup.ValidationError) {
          return toast.error(`${error.message}`);
        }
        toast.warning(`${error.response.data.message}`);
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <>
      <Toast position="bottom-right" autoClose={3000} hideProgressBar />
      <Container>
        <LoginForm.Horizontal onSubmit={handleSubmit}>
          <LoginForm.Group>
            <LoginForm.Title>Login</LoginForm.Title>
          </LoginForm.Group>
          <LoginForm.Group>
            <LoginForm.Label htmlFor="email">
              <Icons.Email />
            </LoginForm.Label>
            <LoginForm.Control
              name="email"
              autoComplete="email"
              placeholder="Digite seu email"
              onChange={handleChange}
              value={form.email}
              disabled={loading}
            />
          </LoginForm.Group>
          <LoginForm.Group>
            <LoginForm.Label htmlFor="password">
              <Icons.Lock />
            </LoginForm.Label>
            <LoginForm.Control
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Digite sua senha"
              onChange={handleChange}
              value={form.password}
              disabled={loading}
            />
          </LoginForm.Group>
          <LoginForm.Group>
            <LoginForm.Submit type="submit" disabled={loading}>
              Entrar
            </LoginForm.Submit>
          </LoginForm.Group>
        </LoginForm.Horizontal>
      </Container>
    </>
  );
};

export default Login;
