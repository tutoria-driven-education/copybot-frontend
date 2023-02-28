import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../hooks/ResultContext";
import AccordionComponent from "../components/Accordion";
import Accordion from "../styles/Accordion";

type MatchsProps = {
  value: {
    table: string;
    columns: Array<string>;
    studentNameOne: string;
    studentNameTwo: string;
  };
};

type ResultState = {
  matchsBack: Array<MatchsProps>;
  matchsFront: Array<MatchsProps>;
};

export default function ResultOneToMany() {
  const [result, setResult] = useState<ResultState>(
    JSON.parse(localStorage.getItem("result") as string)
  );

  return (
    <>
      <Accordion.Container>
        {result?.matchsFront.map((match: MatchsProps, index: number) => (
          <AccordionComponent key={index} matchs={match} />
        ))}
      </Accordion.Container>
    </>
  );
}
