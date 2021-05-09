import { createContext, ReactNode, useEffect, useState } from "react";

import { BarChartData, DashboardContextData, SaleSuccess } from "@types";

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

  return (
    <DashboardContext.Provider
      value={{
        isConnection,
        isLoading,
        barChartData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
