"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BudgetState } from "@/types/budgetState";
import { BudgetItem } from "@/types/budgetItem";

const initialState: BudgetState = {
  id: 1,
  income: 0,
  budgetItems: [],
  categories: [
    "House",
    "Utilities",
    "Food",
    "Transportation",
    "Insurance",
    "Healthcare",
    "Debt Payments",
    "Bills",
    "Education",
    "Miscellaneous",
  ],
  maxPercentage: 100,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateIncome: (state, action: PayloadAction<number>) => {
      state.income = action.payload;
      state.budgetItems.map((item: BudgetItem) => {
        item.value = state.income * (item.percentage / 100);
      });
    },
    addBudgetItem(
      state,
      action: PayloadAction<{
        name: string;
        percentage: number;
        category: string;
      }>,
    ) {
      const { name, percentage, category } = action.payload;
      state.budgetItems.push({
        id: state.id,
        name,
        percentage,
        category,
        value: state.income * (percentage / 100),
      });
      state.id++;
      const sumItemsPercentage = state.budgetItems.reduce(
        (sum, item: BudgetItem) => sum + item.percentage,
        0,
      );
      state.maxPercentage = 100 - sumItemsPercentage;
    },
    removeBudgetItem(state, action: PayloadAction<number>) {
      const index = state.budgetItems.findIndex(
        (item) => item.id === action.payload,
      );
      if (index > -1) {
        state.maxPercentage += state.budgetItems[index].percentage;
        state.budgetItems.splice(index, 1);
      }
    },
    updateBudgetItem(state, action: PayloadAction<BudgetItem>) {
      const index = state.budgetItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index > -1) {
        state.budgetItems[index] = action.payload;
        state.budgetItems[index].value =
          state.income * (state.budgetItems[index].percentage / 100);
        const sumItemsPercentage = state.budgetItems.reduce(
          (sum, item: BudgetItem) => sum + item.percentage,
          0,
        );
        state.maxPercentage = 100 - sumItemsPercentage;
      }
    },
  },
});

export const {
  updateIncome,
  addBudgetItem,
  removeBudgetItem,
  updateBudgetItem,
} = budgetSlice.actions;
export default budgetSlice.reducer;
