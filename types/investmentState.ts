import { InvestmentItem } from "@/types/investmentItem";

export default interface InvestmentState {
  years: number;
  initialAmount: number;
  monthlyContribution: number;
  yearlyGrowth: number;
  prediction: InvestmentItem[];
}
