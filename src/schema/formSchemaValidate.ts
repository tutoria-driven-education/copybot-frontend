import * as Yup from "yup";

const formSchema = Yup.object().shape({
  project: Yup.string().required("Selecione o projeto"),
  url2: Yup.string().url("Insira uma URL válida").required("Insira os repositórios"),
  url1: Yup.string().url("Insira uma URL válida").required("Insira os repositórios"),
});

interface FormValues {
  url1: string;
  url2: string;
  project: string;
}

const formSchemaValidate = async (data: FormValues) => {
  return await formSchema.validate(data);
};

export default formSchemaValidate;
