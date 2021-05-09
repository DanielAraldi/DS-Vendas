export interface DonutChartData {
  series: number[];
  labels: string[];
}

interface Categories {
  categories: string[];
}

interface SeriesData {
  name: string;
  data: number[];
}

export interface BarChartData {
  labels: Categories;
  series: SeriesData[];
}

export interface SaleSum {
  sellerName: string;
  sum: number;
}

export interface SaleSuccess {
  sellerName: string;
  visited: number;
  deals: number;
}
