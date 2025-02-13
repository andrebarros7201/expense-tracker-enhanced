import calculateInvestment from "./calculateInvestment";
import { describe, expect, it } from "vitest";
import { InvestmentItem } from "@/types/investmentItem";

describe("calculateInvestment", () => {
  it("should return empty array", () => {
    const result: InvestmentItem[] = calculateInvestment({
      years: 0,
      initialAmount: 0,
      monthlyContribution: 0,
      yearlyGrowth: 0,
    });

    expect(result).toHaveLength(0);
  });
  it("should return an array with correct length", () => {
    const years = 5;
    const result: InvestmentItem[] = calculateInvestment({
      years,
      initialAmount: 0,
      monthlyContribution: 0,
      yearlyGrowth: 0,
    });

    expect(result).toHaveLength(years);
  });

  it("should return value equal to 500", () => {
    const result: InvestmentItem[] = calculateInvestment({
      years: 1,
      initialAmount: 500,
      monthlyContribution: 0,
      yearlyGrowth: 0,
    });

    expect(result[0].value).toEqual(500);
  });

  it("should start with the current year", () => {
    const result = calculateInvestment({
      years: 1,
      initialAmount: 1000,
      monthlyContribution: 100,
      yearlyGrowth: 5,
    });

    expect(result[0].year).toBe(new Date().getFullYear());
  });

  it("should correctly calculate the final value", () => {
    const result = calculateInvestment({
      years: 1,
      initialAmount: 1000,
      monthlyContribution: 100,
      yearlyGrowth: 12,
    });

    expect(result[0].value).toBeGreaterThan(1000); // The balance should grow
  });

  it("should correctly track yearly differences", () => {
    const result = calculateInvestment({
      years: 2,
      initialAmount: 1000,
      monthlyContribution: 100,
      yearlyGrowth: 10,
    });

    expect(result[1].yearlyDifference).toEqual(
      result[1].value - result[0].value,
    );
  });

  it("should have months with increasing values", () => {
    const result = calculateInvestment({
      years: 1,
      initialAmount: 1000,
      monthlyContribution: 100,
      yearlyGrowth: 10,
    });

    const { months } = result[0];
    for (let i = 1; i < months.length; i++) {
      expect(months[i].value).toBeGreaterThan(months[i - 1].value);
    }
  });
});
