import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import ErrorStyled from "../styles/Error";

export default function Error() {
  return (
    <>
      <ErrorStyled.Container>
        <CiCircleRemove />
        <h2>Página não encontrada</h2>
        <p>Status: 404 - Not Found</p>
        <ErrorStyled.Navigate to="/">
          Voltar para a página inicial
        </ErrorStyled.Navigate>
      </ErrorStyled.Container>
    </>
  );
}
