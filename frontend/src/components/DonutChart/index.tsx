import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { api } from "../../services/api";

import { DonutChartData, SaleSum } from "@types";
import Loading from "components/Loading";

function DonutChart() {
  const [isConnection, setIsConnection] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [donutChartData, setDonutChartData] = useState<DonutChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    api
      .get("/sales/amount-by-seller")
      .then((response) => {
        const data = response.data as SaleSum[];
        const labels = data.map(({ sellerName }) => sellerName);
        const series = data.map(({ sum }) => sum);

        setDonutChartData({ labels, series });
      })
      .catch(() => setIsConnection(false))
      .finally(() => setIsLoading(false));
  }, []);

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
