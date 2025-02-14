"use client";
import { BudgetItem } from "@/types/budgetItem";
import { useState } from "react";

type Props = {
  item: { category: string; items: BudgetItem[] };
};
const DisplayItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={item.category}
      onClick={() => setIsOpen(!isOpen)}
      className={
        "w-full flex flex-col items-start justify-start p-4 cursor-pointer border-2 border-blue-500 box-border"
      }
    >
      <h3 className={"text-xl font-bold "}>{item.category}</h3>
      {isOpen &&
        item.items.map((item) => (
          <div
            key={item.id}
            className={
              "px-6 flex gap-4 flex-col items-center justify-center w-full md:grid grid-cols-[1.5fr_1.5fr_1.5fr_1fr_1fr] border-2 border-blue-500 box-border"
            }
          >
            <p>Name: {item.name}</p>
            <p>Percentage: {item.percentage} %</p>
            <p>Value: {item.value}$</p>
            <button
              className={
                "px-6 py-2 bg-green-700 hover:bg-green-800 transition-all duration-300 shadow-md rounded text-white"
              }
            >
              Update
            </button>
            <button
              className={
                "px-6 py-2 bg-red-600 hover:bg-red-800 transition-all duration-300 shadow-md rounded text-white"
              }
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default DisplayItem;
