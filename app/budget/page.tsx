import BudgetForm from "@/components/layout/budget/budgetForm";
import BudgetDisplayItems from "@/components/layout/budget/display-items";

export default function BudgetPage() {
  return (
    <main className="w-full flex flex-col gap-4 pt-8">
      <BudgetForm />
      <BudgetDisplayItems />
    </main>
  );
}
