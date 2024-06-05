const Table = () => {
  return (
    <table className="shadow-lg bg-white border-collapse">
      <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">Id</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Nome</th>
          <th className="bg-blue-100 border text-left px-8 py-4">
            Data Início
          </th>
          <th className="bg-blue-100 border text-left px-8 py-4">Data Fim</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Status</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="border px-8 py-4">01</td>
          <td className="border px-8 py-4">Test</td>
          <td className="border px-8 py-4">13/11/2024</td>
          <td className="border px-8 py-4">13/11/2025</td>
          <td className="border px-8 py-4">Ativa</td>
          <td className="border px-8 py-4"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
