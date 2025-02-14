import { BudgetItem } from "@/types/budgetItem";

const DisplayCategoryItem: React.FC<{
  item: BudgetItem;
  setIsEditing: (value: boolean) => void;
  handleDeleteItem: (id: number) => void;
}> = ({ item, handleDeleteItem, setIsEditing }) => {
  return (
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
  );
};

export default DisplayCategoryItem;
