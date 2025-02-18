import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InvestmentState from "@/types/investmentState";
import calculateInvestment from "@/lib/functions/calculateInvestment";

const initialState: InvestmentState = {
  years: 0,
  initialAmount: 0,
  monthlyContribution: 0,
  yearlyGrowth: 0,
  prediction: [],
  stats: {
    initialInvestment: 0,
    totalInvested: 0,
    totalGrowth: 0,
    finalValue: 0,
  },
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

      state.stats.initialInvestment = state.initialAmount;
      state.stats.totalInvested = Number(
        (
          state.initialAmount +
          state.monthlyContribution * 12 * state.years
        ).toFixed(2),
      );
      state.stats.finalValue = Number(
        state.prediction[state.prediction.length - 1].months[11].value.toFixed(
          2,
        ),
      );
      state.stats.totalGrowth = Number(
        (state.stats.finalValue - state.stats.totalInvested).toFixed(2),
      );
    },
  },
});

export const { calculatePrediction } = investmentSlice.actions;
export default investmentSlice.reducer;
