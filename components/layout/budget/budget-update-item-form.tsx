import Input from "@/components/ui/input";
import { FormEvent, useRef } from "react";
import { updateBudgetItem } from "@/store/budgetSlice";
import { useDispatch } from "react-redux";
import { BudgetItem } from "@/types/budgetItem";

const BudgetUpdateItemForm: React.FC<{
  item: BudgetItem;
  setIsEditing: (editing: boolean) => void;
}> = ({ item, setIsEditing }) => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const percentageRef = useRef<HTMLInputElement>(null);

  function handleSaveSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      updateBudgetItem({
        id: item.id,
        name: nameRef.current!.value,
        percentage: Number(percentageRef.current!.value),
        category: item.category,
        value: item.value,
      }),
    );
    setIsEditing(false);
  }
  return (
    <form
      onSubmit={(e) => handleSaveSubmit(e)}
      className={
        "w-full md:pl-6 flex flex-col gap-4 md:grid grid-cols-[1.5fr_1.5fr_1.5fr_1fr_1fr] items-center justify-evenly col-span-4"
      }
    >
      <Input name={"name"} type={"text"} placeholder={"Name"} ref={nameRef} />
      <Input
        name={"name"}
        type={"number"}
        placeholder={"Percentage"}
        ref={percentageRef}
      />
      <p>Value: {item.value}$</p>
      <button
        className={
          "px-6 py-2 bg-green-600 hover:bg-green-800 transition-all duration-300 shadow-md rounded text-white"
        }
      >
        Save
      </button>
      <button
        className={
          "px-6 py-2 bg-red-600 hover:bg-red-800 transition-all duration-300 shadow-md rounded text-white"
        }
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
};
export default BudgetUpdateItemForm;
