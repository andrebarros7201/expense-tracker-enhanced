import { describe, expect, it } from "vitest";
import budgetReducer, {
  addBudgetItem,
  removeBudgetItem,
  updateBudgetItem,
  updateIncome,
} from "@/store/budgetSlice";
import { BudgetState } from "@/types/budgetState";
import { BudgetItem } from "@/types/budgetItem";

describe("budgetSlice", () => {
  const initialState: BudgetState = {
    id: 1,
    income: 0,
    budgetItems: [],
    categories: ["House"],
    maxPercentage: 100,
  };

  it("should return the initial state", () => {
    expect(budgetReducer(undefined, { type: "UNKNOWN_ACTION" })).toEqual(
      initialState,
    );
  });

  it("should update income", () => {
    const state = budgetReducer(initialState, updateIncome(5000));
    expect(state.income).toBe(5000);
  });

  it("should add a budget item", () => {
    const state = budgetReducer(
      { ...initialState, income: 1000 },
      addBudgetItem({ name: "Groceries", percentage: 10, category: "Food" }),
    );

    expect(state.budgetItems.length).toBe(1);
    expect(state.budgetItems[0]).toEqual({
      id: 1,
      name: "Groceries",
      percentage: 10,
      category: "Food",
      value: 100,
    });
    expect(state.id).toBe(2);
  });

  it("should remove a budget item by ID", () => {
    const stateWithItem: BudgetState = {
      ...initialState,
      budgetItems: [
        {
          id: 1,
          name: "Groceries",
          percentage: 10,
          category: "Food",
          value: 100,
        },
      ],
    };

    const state = budgetReducer(stateWithItem, removeBudgetItem(1));

    expect(state.budgetItems.length).toBe(0);
  });

  it("should not remove a budget item if ID is not found", () => {
    const stateWithItem: BudgetState = {
      ...initialState,
      budgetItems: [
        {
          id: 1,
          name: "Groceries",
          percentage: 10,
          category: "Food",
          value: 100,
        },
      ],
    };

    const state = budgetReducer(stateWithItem, removeBudgetItem(99));

    expect(state.budgetItems.length).toBe(1);
  });

  it("should update an existing budget item", () => {
    const stateWithItem: BudgetState = {
      ...initialState,
      budgetItems: [
        {
          id: 1,
          name: "Groceries",
          percentage: 10,
          category: "Food",
          value: 100,
        },
      ],
    };

    const updatedItem: BudgetItem = {
      id: 1,
      name: "New Groceries",
      percentage: 20,
      category: "Food",
      value: 200,
    };

    const state = budgetReducer(stateWithItem, updateBudgetItem(updatedItem));

    expect(state.budgetItems.length).toBe(1);
    expect(state.budgetItems[0]).not.toEqual(stateWithItem.budgetItems[0]);
    expect(state.budgetItems[0]).toEqual(updatedItem);
  });

  it("should not update an item if ID is not found", () => {
    const stateWithItem: BudgetState = {
      ...initialState,
      budgetItems: [
        {
          id: 1,
          name: "Groceries",
          percentage: 10,
          category: "Food",
          value: 100,
        },
      ],
    };

    const updatedItem: BudgetItem = {
      id: 99,
      name: "New Groceries",
      percentage: 20,
      category: "Food",
      value: 200,
    };

    const state = budgetReducer(stateWithItem, updateBudgetItem(updatedItem));

    expect(state.budgetItems.length).toBe(1);
    expect(state.budgetItems[0].name).toBe("Groceries"); // Should NOT change
  });
});
