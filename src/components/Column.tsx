import Column from "../styles/Column";

const ColumnComponent = ({ column }: any) => {
  // Tratando a string antes de entrar no componente
  column = column.replace(/&gt;&gt;&gt;&gt;/g, "<br/><br/><div class='title'>");
  column = column.replace(/file/g, "Arquivo");
  column = column.split(".js").join(".js</div>");
  column = column.split(".ts").join(".ts</div>");
  column = column.split(".css").join(".css</div>");
  column = column.split(".html").join(".html</div>");

  return (
    <>
      <Column.Content>
        <Column.Border>
          <Column.StyledInnerHTML
            dangerouslySetInnerHTML={{ __html: column }}
          ></Column.StyledInnerHTML>
        </Column.Border>
      </Column.Content>
    </>
  );
};

export default ColumnComponent;
