import { useCallback, useEffect, useState } from "react";
import { BiLinkExternal, BiShow } from "react-icons/bi";
import { getHistoric } from "../services/api";
import Table from "../styles/Table";

export default function History() {
  const [historic, setHistoric] = useState([]);
  
  const loadHistoric = useCallback(async () => {
    try {
      const response = await getHistoric();

      setHistoric(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadHistoric();
  }, [loadHistoric]);

  return (
    <>
      <Table.Container>
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
            {/* <Table.Row>
              <Table.Cell>Isabelly</Table.Cell>
              <Table.Cell>Cineflex</Table.Cell>
              <Table.Cell>
                <a
                  href="https://github.com/IsabellyWilhelm/cineflex-react.git"
                  target="_blank"
                >
                  https://github.com/IsabellyWilhelm/cineflex-react.git <BiLinkExternal />
                </a>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="https://github.com/ruineto-dev/cineflex"
                  target="_blank"
                >
                  https://github.com/ruineto-dev/cineflex <BiLinkExternal />
                </a>
              </Table.Cell>
              <Table.Cell>99%</Table.Cell>
              <Table.Cell>
                <BiShow />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Larissa Ribeiro Abreu da Silva</Table.Cell>
              <Table.Cell>Cineflex</Table.Cell>
              <Table.Cell>
                <a
                  href="https://github.com/larissaribeiro01/projeto9-cineflex"
                  target="_blank"
                >
                  https://github.com/larissaribeiro01/projeto9-cineflex <BiLinkExternal />
                </a>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="https://github.com/snowslaura/projeto9-cineflex"
                  target="_blank"
                >
                  https://github.com/snowslaura/projeto9-cineflex <BiLinkExternal />
                </a>
              </Table.Cell>
              <Table.Cell>99%</Table.Cell>
              <Table.Cell>
                <BiShow />
              </Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table.Horizontal>
      </Table.Container>
    </>
  );
}
