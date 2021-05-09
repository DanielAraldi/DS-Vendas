import { useContext } from "react";
import Chart from "react-apexcharts";

import { DashboardContext } from "contexts/DashboardContext";

import Loading from "components/Loading";

function DonutChart() {
  const { donutChartData, isConnection, isLoading } = useContext(
    DashboardContext
  );

  const options = {
    legend: {
      show: true,
    },
  };

  return isConnection ? (
    isLoading ? (
      <Loading />
    ) : (
      <Chart
        options={{ ...options, labels: donutChartData.labels }}
        series={donutChartData.series}
        type="donut"
        height="240"
      />
    )
  ) : (
    <div className="d-flex justify-content-center pt-3">
      <p className="text-secondary">Não foi possível obter os dados!</p>
    </div>
  );
}

export default DonutChart;
