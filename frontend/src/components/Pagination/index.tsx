import { useContext } from "react";

import { DashboardContext } from "contexts/DashboardContext";

function Pagination() {
  const { page, changePage } = useContext(DashboardContext);

  return (
    <div className="row d-flex justify-content-center mb-1">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => changePage(page.number - 1)}
            >
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">
              {page.number ? page.number + 1 : 1}
            </span>
          </li>
          <li className={`page-item ${page.last ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => changePage(page.number + 1)}
            >
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
