import React from "react";
import Button from "../Button";

interface Column {
  header: string;
  accessor: string;
}

interface Action {
  label: string;
  icon: React.ReactNode;
  onClick: (row: any) => void;
}

interface Props {
  rows: any[];
  columns: Column[];
  actions?: Action[];
}

const Table = ({ rows, columns, actions }: Props) => {
  return (
    <table className="shadow-lg bg-white border-collapse">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="bg-blue-100 border text-left px-8 py-4">
              {column.header}
            </th>
          ))}
          {actions && actions.length > 0 && (
            <th className="bg-blue-100 border text-center px-8 py-4">Ações</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className="hover:bg-gray-50" key={row.id}>
            {columns.map((column, index) => (
              <td key={index} className="border px-8 py-4">
                {row[column.accessor]}
              </td>
            ))}
            {actions && actions.length > 0 && (
              <td className="border px-8 py-4 text-center">
                {actions.map((action, index) => (
                  <Button key={index} onClick={() => action.onClick(row)}>
                    {action.icon}
                  </Button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
