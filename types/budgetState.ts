import { BudgetItem } from "@/types/budgetItem";

export interface BudgetState {
  id: number;
  categories: string[];
  income: number;
  budgetItems: BudgetItem[];
}
