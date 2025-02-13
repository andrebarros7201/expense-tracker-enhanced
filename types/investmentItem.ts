export interface InvestmentItem {
  year: number;
  value: number;
  yearlyDifference: number;
  months: { month: string; value: number }[];
}
