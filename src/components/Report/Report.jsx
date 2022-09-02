import { useEffect, useState } from "react";
import { ReportStyle, Row, Column, Code } from "./styles";

const Report = ({ table, columns, index }) => {
  return (
    <ReportStyle key={index}>
      <div id={index} dangerouslySetInnerHTML={{ __html: table }}></div>

      <Row>
        {columns.map((column, index) => {
          let newColumn = column
            .replace(/&gt;&gt;&gt;&gt;/g, "<br/><br/><div class='title'>")
            .replace(/file/g, "Arquivo")
            .split(".js")
            .join(".js</div>");

          return (
            <Column key={index}>
              <Code>
                <div dangerouslySetInnerHTML={{ __html: newColumn }}></div>
              </Code>
            </Column>
          );
        })}
      </Row>
    </ReportStyle>
  );
};

export default Report;
