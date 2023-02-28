import { useState } from "react";
import { Column } from "./Result";
import Accordion from "../styles/Accordion";
import Results from "../styles/Results";

type MatchsProps = {
  matchs: {
    value: {
      table: string;
      columns: Array<string>;
      studentNameOne: string;
      studentNameTwo: string;
    };
  };
};

export default function AccordionComponent({ matchs }: MatchsProps) {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const getPercentage: string[] = matchs.value.table.match(
    /(\d+)%/g
  ) as string[];

  return (
    <>
      <Accordion.Button onClick={() => setOpenAccordion(!openAccordion)}>
        {`${matchs.value.studentNameOne} - ${getPercentage[0]} | ${matchs.value.studentNameTwo} - ${getPercentage[1]}`}

        <Accordion.ChevronRight active={openAccordion.toString()} />
      </Accordion.Button>
      <Accordion.Panel active={openAccordion.toString()}>
        <Results.Row>
          {matchs.value.columns.map((column, index) => (
            <Column key={index} innerHTML={column} />
          ))}
        </Results.Row>
      </Accordion.Panel>
    </>
  );
}
