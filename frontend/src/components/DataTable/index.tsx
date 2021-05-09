import { useEffect, useState } from "react";

import { api } from "services/api";

import { SalePage } from "@types";

import { formatDate } from "utils";

import Pagination from "components/Pagination";
import Loading from "components/Loading";

function DataTable() {
  const [isConnection, setIsConnection] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [numberPage, setNumberPage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    api
      .get(`/sales?page=${numberPage}&size=15&sort=date,desc`)
      .then((response) => setPage(response.data))
      .catch(() => setIsConnection(false))
      .finally(() => setIsLoading(false));
  }, [numberPage]);

  const changePage = (numberPage: number) => setNumberPage(numberPage);

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive">
        {isConnection ? (
          isLoading ? (
            <Loading />
          ) : (
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
                {page.content?.map(
                  ({ id, amount, date, deals, seller, visited }) => (
                    <tr key={id}>
                      <td>{formatDate(date, "dd/MM/yyyy")}</td>
                      <td>{seller.name}</td>
                      <td>{visited}</td>
                      <td>{deals}</td>
                      <td>{amount.toFixed(2)}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )
        ) : (
          <div className="d-flex justify-content-center pt-3">
            <p className="text-secondary">
              Não foi possível obter os dados da tabela!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default DataTable;
