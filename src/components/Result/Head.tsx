import { useEffect, useState, useContext } from "react";
import { ResultContext } from "../../hooks/ResultContext";
import Results from "../../styles/Results";

export default function Head() {
  const { result } = useContext(ResultContext);
  const [percent, setPercent] = useState<string[]>([]);

  useEffect(() => {
    const getPercentage: string[] = result.table.match(/(\d+)%/g) as string[];

    setPercent(getPercentage);
  }, []);

  return (
    <Results.Head>
      <div
        dangerouslySetInnerHTML={{ __html: result.table }}
        style={{ display: "none" }}
      ></div>
      <center>
        <table>
          <thead>
            <tr>
              <th>Entregue</th>
              <th>Clonado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`Nome: ${result.studentNameOne} | Porcentagem: ${percent[0]}`}</td>
              <td>{`Nome: ${result.studentNameTwo} | Porcentagem: ${percent[1]}`}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </Results.Head>
  );
}
