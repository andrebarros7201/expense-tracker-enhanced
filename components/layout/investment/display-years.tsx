"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { InvestmentItem } from "@/types/investmentItem";
import DisplayYear from "@/components/layout/investment/display-year";

const DisplayYears = () => {
  const { prediction } = useSelector((state: RootState) => state.investment);

  if (prediction.length === 0) {
    return (
      <div
        className={
          "bg-gray-100 rounded-md w-full box-border p-4 flex items-center justify-center shadow-lg border-2 border-blue-500"
        }
      >
        <h3 className={"font-bold italic"}>There are no items to display</h3>
      </div>
    );
  }

  return (
    <div
      className={
        "w-full shadow-lg border-2 border-blue-500 rounded-md max-h-96 overflow-y-scroll box-border"
      }
    >
      <div
        className={
          "w-full font-bold sm:flex gap-4 sticky top-0 hidden  bg-gray-100 shadow-md p-4 pb-2"
        }
      >
        <p>Year</p>
        <p>Final Value</p>
        <p>Year Difference</p>
      </div>
      <div
        className={
          "flex flex-col gap-4  bg-gray-100   p-4 items-center justify-start "
        }
      >
        {prediction.map((year: InvestmentItem) => (
          <DisplayYear key={year.year} year={year} />
        ))}
      </div>
    </div>
  );
};

export default DisplayYears;
