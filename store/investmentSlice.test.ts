import { it, describe, expect } from "vitest";
import investmentReducer, {
  calculatePrediction,
} from "@/store/investmentSlice";
import InvestmentState from "@/types/investmentState";

describe("Investment Slice", () => {
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

  it("should return initial state", () => {
    expect(investmentReducer(undefined, { type: "UNKNOWN_ACTION" })).toEqual(
      initialState,
    );
  });

  it("should change the state", () => {
    const state = investmentReducer(
      initialState,
      calculatePrediction({
        years: 1,
        initialAmount: 500,
        monthlyContribution: 0,
        yearlyGrowth: 0,
      }),
    );
    expect(state.years).toEqual(1);
    expect(state.prediction).toHaveLength(1);
    expect(state.prediction[0].value).toEqual(500);
  });
});
