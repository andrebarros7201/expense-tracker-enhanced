"use client";
import { BudgetItem } from "@/types/budgetItem";
import { useState } from "react";
import BudgetUpdateItemForm from "@/components/layout/budget/budget-update-item-form";
import { removeBudgetItem } from "@/store/budgetSlice";
import { useDispatch } from "react-redux";

type Props = {
  item: { category: string; items: BudgetItem[] };
};
const DisplayItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteItem(item: number) {
    dispatch(removeBudgetItem(item));
  }

  return (
    <div
      key={item.category}
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
      {isOpen && (
        <div className={"flex w-full gap-4 flex-col border-2 "}>
          {item.items.map((item: BudgetItem) => (
            <>
              {!isEditing ? (
                <div
                  key={item.id}
                  className={`md:pl-6 flex gap-4 flex-col items-center justify-center w-full md:grid grid-cols-[1.5fr_1.5fr_1.5fr_1fr_1fr] border-2 border-blue-500`}
                >
                  <p>Name: {item.name}</p>
                  <p>Percentage: {item.percentage} %</p>
                  <p>Value: {item.value}$</p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className={
                      "px-6 py-2 bg-green-700 hover:bg-green-800 transition-all duration-300 shadow-md rounded text-white"
                    }
                  >
                    Update
                  </button>
                  <button
                    className={
                      "px-6 w-min py-2 bg-red-600 hover:bg-red-800 transition-all duration-300 shadow-md rounded text-white"
                    }
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <BudgetUpdateItemForm item={item} setIsEditing={setIsEditing} />
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayItem;
