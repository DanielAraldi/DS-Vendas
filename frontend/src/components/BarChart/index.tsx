import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { BarChartData, SaleSuccess } from "@types";
import { api } from "services/api";
import { round } from "utils/round";

function BarChart() {
  const [barChartData, setBarChartData] = useState<BarChartData>({
    labels: { categories: [] },
    series: [{ name: "", data: [] }],
  });

  useEffect(() => {
    api.get("/sales/success-by-seller").then((response) => {
      const data = response.data as SaleSuccess[];
      const names = data.map(({ sellerName }) => sellerName);
      const percent = data.map(({ deals, visited }) =>
        round(100 * (deals / visited), 2)
      );

      setBarChartData({
        labels: { categories: names },
        series: [{ name: "% Sucesso", data: percent }],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: barChartData.labels }}
      series={barChartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;
