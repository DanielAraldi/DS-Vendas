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

export interface Seller {
  id: number;
  name: string;
}

export interface Sale {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export interface SalePage {
  content: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
