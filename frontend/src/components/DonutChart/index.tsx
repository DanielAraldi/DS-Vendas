import Chart from "react-apexcharts";

function DonutChart() {
  const options = {
    legend: {
      show: true,
    },
  };

  const mockData = {
    series: [47, 49, 44, 22, 47],
    labels: ["Daniel", "Gustavo", "Marcos", "Milena", "Greice"],
  };

  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
