import { BudgetItem } from "@/types/budgetItem";
import { useState } from "react";
import { removeBudgetItem } from "@/store/budgetSlice";
import { useDispatch } from "react-redux";
import BudgetUpdateItemForm from "@/components/layout/budget/budget-update-item-form";

const Item = ({
  item,
  setIsEditing,
}: {
  item: BudgetItem;
  setIsEditing: (x: boolean) => void;
}) => {
  const dispatch = useDispatch();
  function handleDeleteItem(id: number) {
    dispatch(removeBudgetItem(id));
  }
  return (
    <div
      className={
        "w-full md:pl-6 flex flex-col gap-4 md:grid grid-cols-[1.5fr_1.5fr_1.5fr_1fr_1fr] items-center justify-evenly col-span-4"
      }
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
  );
};

const DisplayCategoryItem: React.FC<{
  item: BudgetItem;
}> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing ? (
    <Item item={item} setIsEditing={setIsEditing} />
  ) : (
    <BudgetUpdateItemForm item={item} setIsEditing={setIsEditing} />
  );
};

export default DisplayCategoryItem;
