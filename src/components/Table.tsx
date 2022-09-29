import Table from "../styles/Table";

const TableComponent = ({ table, studentName, studentDatabase }: any) => {
  const arrNumber = table.match(/(\d+(\.\d+)?%)/g);

  const source = arrNumber[0];
  const delivered = arrNumber[1];

  studentName = studentName.replace(/0./, " ");
  studentDatabase = studentDatabase.replace(/0./, " ");

  return (
    <>
      <Table.Horizontal>
        <Table.Column>
          Github: {studentName} <span>({source})</span>
        </Table.Column>
        <Table.Column>
          Github: {studentDatabase} <span>({delivered})</span>
        </Table.Column>
      </Table.Horizontal>
    </>
  );
};

export default TableComponent;
