import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BudgetState } from "@/types/budgetState";
import { BudgetItem } from "@/types/budgetItem";

const initialState: BudgetState = {
  id: 1,
  income: 0,
  budgetItems: [],
  categories: [],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateIncome: (state, action: PayloadAction<number>) => {
      state.income = action.payload;
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
        value: state.income / percentage,
      });
      state.id++;
    },
    removeBudgetItem(state, action: PayloadAction<number>) {
      const index = state.budgetItems.findIndex(
        (item) => item.id === action.payload,
      );
      if (index > -1) {
        state.budgetItems.splice(index, 1);
      }
    },
    updateBudgetItem(state, action: PayloadAction<BudgetItem>) {
      const index = state.budgetItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index > -1) {
        state.budgetItems[index] = action.payload;
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
