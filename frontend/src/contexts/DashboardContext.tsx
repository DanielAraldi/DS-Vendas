import { createContext, ReactNode, useEffect, useState } from "react";

import {
  BarChartData,
  DashboardContextData,
  DonutChartData,
  SaleSuccess,
  SaleSum,
} from "@types";

import { api } from "services/api";

import { round } from "utils";

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [isConnection, setIsConnection] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [barChartData, setBarChartData] = useState<BarChartData>({
    labels: { categories: [] },
    series: [{ name: "", data: [] }],
  });
  const [donutChartData, setDonutChartData] = useState<DonutChartData>({
    labels: [],
    series: [],
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
      .catch(() => setIsConnection(false))
      .finally(() => setIsLoading(false));
  }, []);

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

  return (
    <DashboardContext.Provider
      value={{
        isConnection,
        isLoading,
        barChartData,
        donutChartData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
