import InvestmentForm from "@/components/layout/investment/investment-form";
import DisplayYears from "@/components/layout/investment/display-years";
import Stats from "@/components/layout/investment/stats";

export default function InvestmentPage() {
  return (
    <div className={"w-full flex flex-1 pt-8 flex-col gap-4 "}>
      <InvestmentForm />
      <div className={"flex flex-col sm:grid grid-cols-2 gap-4"}>
        <Stats />
        <Stats />
      </div>
      <DisplayYears />
    </div>
  );
}
