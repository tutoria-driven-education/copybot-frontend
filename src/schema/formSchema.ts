import * as yup from "yup";

const oneToOneSchema = yup.object().shape({
  project: yup.string().required("Selecione um projeto"),
  url2: yup.string().url("Insira uma URL válida").required("Preencha o campo 'Fonte'"),
  url1: yup.string().url("Insira uma URL válida").required("Preencha o campo 'Entregue'"),
});

export { oneToOneSchema };
