import { useContext } from "react";
import Chart from "react-apexcharts";

import { DashboardContext } from "contexts/DashboardContext";

import Loading from "components/Loading";

function BarChart() {
  const { barChartData, isConnection, isLoading } = useContext(
    DashboardContext
  );

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return isConnection ? (
    isLoading ? (
      <Loading />
    ) : (
      <Chart
        options={{ ...options, xaxis: barChartData.labels }}
        series={barChartData.series}
        type="bar"
        height="240"
      />
    )
  ) : (
    <div className="d-flex justify-content-center pt-3">
      <p className="text-secondary">Não foi possível obter os dados!</p>
    </div>
  );
}

export default BarChart;
