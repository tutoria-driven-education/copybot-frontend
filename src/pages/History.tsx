import { useCallback, useContext, useEffect, useState } from "react";
import { BiLinkExternal, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../hooks/ResultContext";
import { getHistoric } from "../services/api";
import Table from "../styles/Table";

type ResultType = {
  table: string;
  similarity: number;
  columnLeft: string;
  columnRight: string;
};

type Historic = {
  studentNameOne: string;
  studentNameTwo: string;
  project: string;
  projectDelivered: string;
  projectSource: string;
  warning: boolean;
  Result: ResultType[];
};

export default function History() {
  const navigate = useNavigate();

  const { setResult } = useContext(ResultContext);
  const [historic, setHistoric] = useState<Historic[]>();

  const loadHistoric = useCallback(async () => {
    try {
      const response = await getHistoric();

      setHistoric(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadHistoric();
  }, [loadHistoric]);

  const openResultPage = (historic: Historic) => {
    const newHistoric = {
      type: "one-to-one",
      table: historic.Result[0].table,
      columns: [historic.Result[0].columnLeft, historic.Result[0].columnRight],
      studentNameOne: historic.studentNameOne,
      studentNameTwo: historic.studentNameTwo,
    };

    setResult(newHistoric);

    localStorage.setItem("result", JSON.stringify(newHistoric));

    navigate("/result");
  };

  return (
    <>
      <Table.Container className="aqui">
        <Table.Horizontal>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell scope="col">Nome</Table.HeaderCell>
              <Table.HeaderCell scope="col">Projeto</Table.HeaderCell>
              <Table.HeaderCell scope="col">Entregue</Table.HeaderCell>
              <Table.HeaderCell scope="col">Original</Table.HeaderCell>
              <Table.HeaderCell scope="col">Porcentagem</Table.HeaderCell>
              <Table.HeaderCell scope="col">Ações</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {historic?.map((historic: Historic, index: number) => (
              <Table.Row key={index}>
                <Table.Cell>{historic.studentNameOne}</Table.Cell>
                <Table.Cell>{historic.project}</Table.Cell>
                <Table.Cell>
                  <a href={historic.projectDelivered} target="_blank">
                    {historic.projectDelivered} <BiLinkExternal />
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href={historic.projectSource} target="_blank">
                    {historic.projectSource} <BiLinkExternal />
                  </a>
                </Table.Cell>
                <Table.Cell>{historic.Result[0].similarity}%</Table.Cell>
                <Table.Cell>
                  <Table.Show onClick={() => openResultPage(historic)}>
                    <BiShow />
                  </Table.Show>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Horizontal>
      </Table.Container>
    </>
  );
}
