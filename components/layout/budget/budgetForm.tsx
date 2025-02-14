"use client";
import Input from "@/components/ui/input";
import { FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addBudgetItem, updateIncome } from "@/store/budgetSlice";

const BudgetPage = () => {
  const categories = useSelector((state: RootState) => state.budget.categories);
  const dispatch = useDispatch();

  const incomeRef = useRef<HTMLInputElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const percentageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      addBudgetItem({
        name: nameRef.current!.value,
        category: categoryRef.current!.value,
        percentage: Number(percentageRef.current!.value),
      }),
    );
  }

  function handleIncomeChange() {
    dispatch(updateIncome(Number(incomeRef.current!.value)));
  }

  return (
    <section className="w-full  flex flex-col items-center justify-start flex-1 p-6">
      <div className="flex flex-col gap-6 w-full">
        <div className="p-4 shadow-lg bg-gray-100 rounded-md w-full">
          <Input
            type="number"
            name="income"
            min={0}
            placeholder="Ex: 1000"
            ref={incomeRef}
            onChange={handleIncomeChange}
          />
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-100 shadow-lg rounded-md w-full">
          <Input
            type="text"
            name="name"
            placeholder="Groceries..."
            ref={nameRef}
          />
          <Input
            type="number"
            min={1}
            max={100}
            ref={percentageRef}
            name="percentage"
            placeholder="1-100"
          />
          <div className={"flex flex-col items-start gap-2 "}>
            <label htmlFor={"category"} className={"capitalize"}>
              Category
            </label>
            <select
              className="w-full h-full border-2 border-blue-500 rounded"
              ref={categoryRef}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all duration-300 shadow-md"
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default BudgetPage;
