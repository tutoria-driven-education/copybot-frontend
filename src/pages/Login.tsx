import { useCallback, useState } from "react";
import { BiEnvelope, BiLock } from "react-icons/bi";
import Form from "../styles/Form";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        
      } catch (error) {}
    },
    [values]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  return (
    <>
      <Form.Container>
        <Form.Horizontal onSubmit={handleSubmit} login={true}>
          <Form.Title>Entrar</Form.Title>
          <Form.Group>
            <Form.Control
              name="email"
              type="text"
              onChange={handleChange}
              value={values.email}
              placeholder="E-mail"
            />
            <Form.LabelIcon>
              <BiEnvelope />
            </Form.LabelIcon>
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Senha"
            />
            <Form.LabelIcon>
              <BiLock />
            </Form.LabelIcon>
          </Form.Group>
          <Form.Group>
            <Form.Submit type="submit">Entrar</Form.Submit>
          </Form.Group>
        </Form.Horizontal>
      </Form.Container>
    </>
  );
}
