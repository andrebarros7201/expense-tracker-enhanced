import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InvestmentState from "@/types/investmentState";
import calculateInvestment from "@/lib/functions/calculateInvestment";

const initialState: InvestmentState = {
  years: 0,
  initialAmount: 0,
  monthlyContribution: 0,
  yearlyGrowth: 0,
  prediction: [],
};

const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
    calculatePrediction(
      state,
      action: PayloadAction<{
        years: number;
        initialAmount: number;
        monthlyContribution: number;
        yearlyGrowth: number;
      }>,
    ) {
      state.years = action.payload.years;
      state.initialAmount = action.payload.initialAmount;
      state.monthlyContribution = action.payload.monthlyContribution;
      state.yearlyGrowth = action.payload.yearlyGrowth;

      state.prediction = calculateInvestment({
        years: state.years,
        initialAmount: state.initialAmount,
        monthlyContribution: state.monthlyContribution,
        yearlyGrowth: state.yearlyGrowth,
      });
    },
  },
});

export const { calculatePrediction } = investmentSlice.actions;
export default investmentSlice.reducer;
