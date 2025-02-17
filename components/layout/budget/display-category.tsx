"use client";
import { BudgetItem } from "@/types/budgetItem";
import { useState } from "react";
import BudgetUpdateItemForm from "@/components/layout/budget/budget-update-item-form";
import { removeBudgetItem } from "@/store/budgetSlice";
import { useDispatch } from "react-redux";
import DisplayCategoryItem from "@/components/layout/budget/display-category-item";

type Props = {
  item: { category: string; items: BudgetItem[] };
};
const DisplayCategory = ({ item }: Props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        "w-full flex flex-col items-center justify-start md:items-start  p-4  box-border"
      }
    >
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className={"text-xl font-bold cursor-pointer mb-4 md:mb-0"}
      >
        {item.category}
      </h3>
      {item.items.map((budgetItem) => (
        <DisplayCategoryItem item={budgetItem} />
      ))}
    </div>
  );
};

export default DisplayCategory;
