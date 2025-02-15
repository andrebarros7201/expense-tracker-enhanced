"use client";
import { InvestmentItem } from "@/types/investmentItem";
import { useState } from "react";

const DisplayYear: React.FC<{ year: InvestmentItem }> = ({ year }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"w-full"}>
      <div
        className={
          "flex  items-center justify-center sm:justify-start cursor-pointer"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={"font-bold "}>
          {!isOpen ? "➡️ " : "⬇️ "}{" "}
          {`${year.year} | ${year.value} $  ${year.yearlyDifference > 0 ? `| (+ ${year.yearlyDifference} $)` : ""} `}
        </h3>
      </div>
      {isOpen && (
        <div className={"grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6"}>
          {year.months.map((month) => (
            <div key={month.month} className={"p-4 text-center flex flex-col"}>
              <p>{month.month}:</p>
              <p>{month.value} $</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayYear;
