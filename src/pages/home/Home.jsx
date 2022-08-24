import { useCallback, useContext, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { ReportsContext } from "../../hooks/context/ReportsContext";
import { sendRepository } from "../../services/api";
import {
  Container,
  Form,
  Group,
  Label,
  Input,
  Select,
  Submit,
  OctoFace,
  CloudUpload,
  LabelSelect,
  Loading,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { reports, setReports } = useContext(ReportsContext);
  const [values, setValues] = useState({ url: "", project: "" });

  const handleChangeValues = useCallback(
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsSubmitted(true);
        const response = await sendRepository(values);

        if (response.status === 200) {
          navigate("/reports");
          setIsSubmitted(false);
          setReports(response.data);
          setValues({ url: "", project: "" });
          localStorage.setItem("storageReports", JSON.stringify(response.data));
        }
      } catch (error) {
        setIsSubmitted(true)
      }
    },
    [values, reports]
  );

  return (
    <>
      <Container center={true}>
        {isSubmitted ? (
          <>
            <Loading>
              <h1>
                Aguarde, estamos fazendo as comparações com o Banco de dados!
                Isso pode demorar um pouco.
              </h1>
              <ThreeDots
                color="#ff4791"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
              />
            </Loading>
          </>
        ) : (
          <Form onSubmit={handleSubmitForm}>
            <Group>
              <Label htmlFor="url">
                Insira a URL do repositório <OctoFace />
              </Label>
              <Input
                id="url"
                name="url"
                value={values.url}
                onChange={handleChangeValues}
              />
              <CloudUpload />
            </Group>
            <Group>
              <Select id="project" name="project" onChange={handleChangeValues}>
                <option value="driveneats">Driven Eats</option>
                <option value="cineflex">Cineflex</option>
              </Select>
              <LabelSelect htmlFor="project">
                <GoTriangleDown />
              </LabelSelect>
            </Group>
            <Group>
              <Submit type="submit">Enviar</Submit>
            </Group>
          </Form>
        )}
      </Container>
    </>
  );
};

export default Home;
