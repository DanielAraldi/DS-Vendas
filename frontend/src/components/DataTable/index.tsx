function DataTable() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
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
          <tr>
            <td>04/05/2021</td>
            <td>Daniel</td>
            <td>64</td>
            <td>47</td>
            <td>15017.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
