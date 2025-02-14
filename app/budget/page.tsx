import Input from "@/components/ui/input";

export default function BudgetPage() {
  return (
    <main className="w-full  flex flex-col items-center justify-start flex-1 p-6">
      <div className="flex flex-col gap-6 w-full">
        <div className="p-4 shadow-lg bg-gray-100 rounded-md w-full">
          <Input type="number" name="income" min={0} placeholder="Ex: 1000" />
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-100 shadow-lg rounded-md w-full">
          <Input type="text" name="category" placeholder="Groceries..." />
          <Input
            type="number"
            min={1}
            max={100}
            name="percentage"
            placeholder="1-100"
          />
          <Input
            type="number"
            min={1}
            max={100}
            name="amount"
            placeholder="Amount"
          />
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all duration-300 shadow-md">
            Add
          </button>
        </form>
      </div>
    </main>
  );
}
