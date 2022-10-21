import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface LoginValues {
  email: string;
  password: string;
}

const loginSchemaValidate = async (data: LoginValues) => {
  return await loginSchema.validate(data);
};

export default loginSchemaValidate;
