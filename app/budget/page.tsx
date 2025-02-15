import BudgetForm from "@/components/layout/budget/budget-form";
import BudgetDisplayCategories from "@/components/layout/budget/display-categories";

export default function BudgetPage() {
  return (
    <main className="w-full flex flex-col gap-4 pt-8">
      <BudgetForm />
      <BudgetDisplayCategories />
    </main>
  );
}
