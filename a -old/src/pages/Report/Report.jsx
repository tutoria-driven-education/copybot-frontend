import { TableStyles } from "../Styles/Table";
import { Flex } from "../Styles/Column";
import Column from "./Column";

const Report = ({ columns, table, index }) => {
  return (
    <>
      <div id={index}>
        <TableStyles>
          <div
            dangerouslySetInnerHTML={{
              __html: table,
            }}
          ></div>
        </TableStyles>

        <Flex>
          {columns.map((column, index) => {
            let newColumn = column
              .replace(/&gt;&gt;&gt;&gt;/g, "<br/><br/><div class='title'>")
              .replace(/file/g, "Arquivo")
              .split(".js")
              .join(".js</div>");

            return <Column key={index} newColumn={newColumn} />;
          })}
        </Flex>
      </div>
    </>
  );
};

export default Report;
