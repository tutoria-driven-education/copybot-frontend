import { useRef } from "react";

import { ColumnStyles, Flex, Code } from "../Styles/Column";

const Column = ({ newColumn }) => {
  return (
    <>
      <ColumnStyles>
        <Flex flexDirectionColumn={true}>
          <Code
            className="code"
            dangerouslySetInnerHTML={{ __html: newColumn }}
          ></Code>
        </Flex>
      </ColumnStyles>
    </>
  );
};

export default Column;
