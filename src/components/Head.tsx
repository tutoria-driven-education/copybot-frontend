import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ResultContext } from "../hooks/ResultContext";
import Results from "../styles/Results";

interface HeadProps {
  innerHTML: string;
}

interface IStudents {
  name: string;
  percent: string;
}

export default function Head({ innerHTML }: HeadProps) {
  //
  const { result } = useContext(ResultContext);

  const [students, setStudents] = useState<IStudents[]>([
    { name: "", percent: "" },
    { name: "", percent: "" },
  ]);

  useEffect(() => {
    const studentDatabase =
      document.querySelectorAll("table tbody tr th")[2].innerHTML;
    const studentDelivered =
      document.querySelectorAll("table tbody tr th")[0].innerHTML;
    const getPercentage: string[] = innerHTML.match(/(\d+)%/g) as string[];

    setStudents([
      { name: studentDelivered, percent: getPercentage[0] },
      { name: studentDatabase, percent: getPercentage[1] },
    ]);
  }, []);

  return (
    <Results.Head>
      <div
        dangerouslySetInnerHTML={{ __html: innerHTML }}
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
              <td>{students[0].name}</td>
              <td>{students[1].name}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </Results.Head>
  );
}
