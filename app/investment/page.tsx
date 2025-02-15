import InvestmentForm from "@/components/layout/investment/investment-form";
import DisplayYears from "@/components/layout/investment/display-years";

export default function InvestmentPage() {
  return (
    <div className={"w-full flex flex-1 pt-8 flex-col gap-4 "}>
      <InvestmentForm />
      <DisplayYears />
    </div>
  );
}
