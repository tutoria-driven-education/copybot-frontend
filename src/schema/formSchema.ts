import * as yup from "yup";

const oneToOneSchema = yup.object().shape({
  project: yup.string().required("Selecione um projeto"),
  url2: yup
    .string()
    .url("Insira uma URL válida")
    .required("Preencha o campo 'Fonte'"),
  url1: yup
    .string()
    .url("Insira uma URL válida")
    .required("Preencha o campo 'Entregue'"),
});

const oneToManySchema = yup.object().shape({
  project: yup.string().required("Selecione um projeto"),
  url: yup
    .string()
    .url("Insira uma URL válida")
    .required("Preencha o campo 'Entregue'"),
});

const signInSchema = yup.object().shape({
  password: yup.string().required("Insira a senha"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Insira o e-mail"),
});

export { oneToOneSchema, oneToManySchema, signInSchema };
