import Results from "../styles/Results";

interface ColumnProps {
  innerHTML: string;
}

export default function Column({ innerHTML }: ColumnProps) {

  innerHTML = innerHTML.replace(/(\/\* &lt;filePath&gt; -{19})/g, "<div class='file-path'>");
  innerHTML = innerHTML.replace(/(-{19} &lt;\/filePath&gt; \*\/)/g, "</div>");
  
  return (
    <Results.Col>
      <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
    </Results.Col>
  );
}
