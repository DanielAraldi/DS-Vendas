import { useEffect, useState } from "react";

import { api } from "services/api";

import { SalePage } from "@types";

import { formatDate } from "utils";

function DataTable() {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    api
      .get("/sales?page=0&size=15&sort=date,desc")
      .then((response) => setPage(response.data));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm mb-5">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(({ id, amount, date, deals, seller, visited }) => (
            <tr key={id}>
              <td>{formatDate(date, "dd/MM/yyyy")}</td>
              <td>{seller.name}</td>
              <td>{visited}</td>
              <td>{deals}</td>
              <td>{amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
