import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { api } from "../../services/api";

import { DonutChartData, SaleSum } from "@types";

function DonutChart() {
  const [donutChartData, setDonutChartData] = useState<DonutChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    api.get("/sales/amount-by-seller").then((response) => {
      const data = response.data as SaleSum[];
      const labels = data.map(({ sellerName }) => sellerName);
      const series = data.map(({ sum }) => sum);

      setDonutChartData({ labels, series });
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: donutChartData.labels }}
      series={donutChartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
