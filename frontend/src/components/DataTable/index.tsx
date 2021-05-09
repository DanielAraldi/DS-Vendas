import { useContext } from "react";

import { DashboardContext } from "contexts/DashboardContext";

import Pagination from "components/Pagination";
import Loading from "components/Loading";

import { formatDate } from "utils";

function DataTable() {
  const { isConnection, isLoading, page } = useContext(DashboardContext);

  return (
    <>
      <Pagination />
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
