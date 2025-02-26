"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BudgetItem } from "@/types/budgetItem";
import DisplayCategory from "@/components/layout/budget/display-category";

const BudgetDisplayCategories = () => {
  const { budgetItems } = useSelector((state: RootState) => state.budget);
  const notEmptyCategories: { category: string; items: BudgetItem[] }[] = [];

  budgetItems.forEach((item: BudgetItem) => {
    const index = notEmptyCategories.findIndex(
      (x) => x.category === item.category,
    );
    if (index === -1) {
      notEmptyCategories.push({ category: item.category, items: [] });
    }
  });

  notEmptyCategories.map((category) => {
    budgetItems.map((item: BudgetItem) => {
      if (item.category === category.category) {
        category.items.push(item);
      }
    });
  });

  if (budgetItems.length === 0) {
    return (
      <div
        className={
          "bg-gray-100 rounded-md w-full box-border p-4 flex items-center justify-center shadow-lg border-2 border-blue-500"
        }
      >
        <h3 className={"font-bold italic"}>There are no items to display</h3>
      </div>
    );
  }

  return (
    <div
      className={
        "bg-gray-100 rounded-md w-full box-border p-4 flex flex-col max-h-96 overflow-y-scroll items-center justify-start shadow-lg border-2 border-blue-500"
      }
    >
      {notEmptyCategories.map((category) => (
        <DisplayCategory item={category} key={category.category} />
      ))}
    </div>
  );
};

export default BudgetDisplayCategories;
