"use client";
import Input from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useRef } from "react";
import { calculatePrediction } from "@/store/investmentSlice";
import { RootState } from "@/store/store";
import exportToCSV from "@/lib/functions/exportToCSV";

const InvestmentForm = () => {
  const dispatch = useDispatch();
  const yearsRef = useRef<HTMLInputElement>(null);
  const initialAmountRef = useRef<HTMLInputElement>(null);
  const monthlyContributionRef = useRef<HTMLInputElement>(null);
  const yearlyGrowthRef = useRef<HTMLInputElement>(null);
  const { prediction } = useSelector((state: RootState) => state.investment);

  const downloadEnable = prediction.length > 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      calculatePrediction({
        years: Number(yearsRef.current!.value),
        initialAmount: Number(initialAmountRef.current!.value),
        monthlyContribution: Number(monthlyContributionRef.current!.value),
        yearlyGrowth: Number(yearlyGrowthRef.current!.value),
      })
    );
  }

  function handleDownloadData() {
    exportToCSV(prediction);
  }

  return (
    <section
      className={
        "border-2 border-blue-500 w-full flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-md shadow-xl"
      }
    >
      <form
        className={"gap-4 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-5"}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          type={"number"}
          name={"years"}
          label={"Years"}
          min={0}
          max={50}
          ref={yearsRef}
        />
        <Input
          type={"number"}
          name={"initial_amount"}
          label={"Initial Amount"}
          min={0}
          ref={initialAmountRef}
        />
        <Input
          type={"number"}
          name={"monthly_contribution"}
          label={"Monthly Contribution"}
          min={0}
          ref={monthlyContributionRef}
        />
        <Input
          type={"number"}
          name={"yearly_growth"}
          label={"Yearly Growth"}
          min={0}
          max={50}
          ref={yearlyGrowthRef}
        />
        <button
          type={"submit"}
          className={
            "bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all duration-300 shadow-md sm:col-span-2 md:col-span-1"
          }
        >
          Calculate
        </button>
      </form>
      <button
        type={"button"}
        onClick={handleDownloadData}
        disabled={!downloadEnable}
        className={`${downloadEnable ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"} text-white py-2 px-6 rounded  transition-all duration-300 shadow-md sm:col-span-2 md:col-span-1`}
      >
        Download Data
      </button>
    </section>
  );
};

export default InvestmentForm;
