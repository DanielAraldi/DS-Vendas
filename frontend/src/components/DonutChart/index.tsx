import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { api } from "../../services/api";

import { ChartData, SaleSum } from "@types";

function DonutChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    api.get("/sales/amount-by-seller").then((response) => {
      const data = response.data as SaleSum[];
      const labels = data.map(({ sellerName }) => sellerName);
      const series = data.map(({ sum }) => sum);

      setChartData({ labels, series });
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
