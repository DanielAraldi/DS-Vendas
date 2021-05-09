import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { api } from "services/api";

import { BarChartData, SaleSuccess } from "@types";

import { round } from "utils";

function BarChart() {
  const [isConnection, setIsConnection] = useState(true);
  const [barChartData, setBarChartData] = useState<BarChartData>({
    labels: { categories: [] },
    series: [{ name: "", data: [] }],
  });

  useEffect(() => {
    api
      .get("/sales/success-by-seller")
      .then((response) => {
        const data = response.data as SaleSuccess[];
        const names = data.map(({ sellerName }) => sellerName);
        const percent = data.map(({ deals, visited }) =>
          round(100 * (deals / visited), 2)
        );

        setBarChartData({
          labels: { categories: names },
          series: [{ name: "% Sucesso", data: percent }],
        });
      })
      .catch(() => setIsConnection(false));
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return isConnection ? (
    <Chart
      options={{ ...options, xaxis: barChartData.labels }}
      series={barChartData.series}
      type="bar"
      height="240"
    />
  ) : (
    <div className="d-flex justify-content-center pt-3">
      <p className="text-secondary">Não foi possível obter os dados!</p>
    </div>
  );
}

export default BarChart;
